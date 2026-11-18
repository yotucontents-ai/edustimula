// Valida el contenido de data/ antes de compilar.
// Errores (salen con código 1): ids duplicados entre hermanos, juegos mal formados,
// imágenes locales que no existen, iconos desconocidos, áreas sin configurar.
// Avisos / información: ids repetidos en distintos sitios, contenido pendiente, imágenes provisionales.
import { build } from 'esbuild';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'edustimula-validate-'));

async function load(entry, name) {
  const outfile = path.join(tmp, `${name}.mjs`);
  await build({ entryPoints: [path.join(root, entry)], bundle: true, format: 'esm', platform: 'node', outfile, logLevel: 'error' });
  return import(pathToFileURL(outfile).href);
}

const { APP_DATA } = await load('data/index.ts', 'data');
const { IconMap } = await load('icons.ts', 'icons');
fs.rmSync(tmp, { recursive: true, force: true });

const errors = [];
const warnings = [];
const stats = { games: 0, activities: 0, localImages: 0, placeholderImages: 0, emptyAreas: 0, groupsWithoutAreas: 0 };
const globalIds = new Map(); // id -> [rutas]

const err = (where, msg) => errors.push(`${where}: ${msg}`);

function checkUnique(ids, where, what) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) err(where, `${what} duplicado "${id}"`);
    seen.add(id);
  }
}

function checkIcon(name, where) {
  if (name && !IconMap[name]) err(where, `icono "${name}" no existe en icons.ts`);
}

function checkImage(src, where) {
  if (typeof src !== 'string' || !src) return err(where, 'imagen vacía');
  if (src.startsWith('/')) {
    stats.localImages++;
    if (!fs.existsSync(path.join(root, 'public', src))) err(where, `la imagen local "${src}" no existe en public/`);
  } else if (src.includes('picsum.photos')) {
    stats.placeholderImages++;
  }
}

function checkGame(game, where) {
  stats.games++;
  const ids = (game.options ?? []).map(o => o.id);
  if (!game.question) err(where, 'el juego no tiene pregunta');
  if (ids.length === 0) err(where, 'el juego no tiene opciones');
  checkUnique(ids, where, 'id de opción');
  if (!ids.includes(game.correctAnswer)) err(where, `correctAnswer "${game.correctAnswer}" no está entre las opciones (${ids.join(', ')})`);
  for (const o of game.options ?? []) {
    if (!o.label) err(where, `la opción "${o.id}" no tiene etiqueta`);
    checkIcon(o.icon, where);
    if (o.imageSrc) checkImage(o.imageSrc, where);
  }
}

function walkSubSections(list, where) {
  checkUnique(list.map(s => s.id), where, 'id de subsección');
  for (const sub of list) {
    const here = `${where} › ${sub.id}`;
    (globalIds.get(sub.id) ?? globalIds.set(sub.id, []).get(sub.id)).push(here);
    if (!sub.title) err(here, 'sin título');
    checkIcon(sub.icon, here);
    if (sub.game) checkGame(sub.game, here);
    if (sub.content) {
      stats.activities++;
      for (const block of sub.content)
        for (const item of block.items)
          if (typeof item !== 'string') checkImage(item.imageSrc, here);
    }
    if (!sub.game && !sub.content && !sub.subSections) err(here, 'no tiene contenido, juego ni subsecciones');
    if (sub.subSections) walkSubSections(sub.subSections, here);
  }
}

function walkGroup(cat, group, where) {
  for (const item of group.introText ?? []) if (typeof item !== 'string') checkIcon(item.icon, `${where} › introText`);
  const allowed = new Set(cat.areaConfigs.map(a => a.type));
  const areas = Object.entries(group.areas ?? {});
  const hasChildren = (group.subGroups ?? []).length > 0;
  if (!hasChildren && areas.length === 0) stats.groupsWithoutAreas++;
  for (const [type, area] of areas) {
    const here = `${where} › ${type}`;
    if (!allowed.has(type)) err(here, `el área "${type}" no está en areaConfigs de la categoría ${cat.id}, nunca se mostrará`);
    if (!area.subSections || area.subSections.length === 0) stats.emptyAreas++;
    else walkSubSections(area.subSections, here);
  }
  if (hasChildren) {
    checkUnique(group.subGroups.map(g => g.id), where, 'id de tramo');
    for (const sub of group.subGroups) walkGroup(cat, sub, `${where} › ${sub.id}`);
  }
}

checkUnique(APP_DATA.map(c => c.id), 'APP_DATA', 'id de categoría');
for (const cat of APP_DATA) {
  checkUnique(cat.ageGroups.map(g => g.id), cat.id, 'id de grupo de edad');
  checkUnique(cat.areaConfigs.map(a => a.type), cat.id, 'área en areaConfigs');
  for (const age of cat.ageGroups) walkGroup(cat, age, `${cat.id} › ${age.id}`);
}

for (const [id, places] of globalIds)
  if (places.length > 1) warnings.push(`id "${id}" repetido en ${places.length} sitios (no es error si están en listas distintas)`);

console.log('Validación de datos de EduStimula');
console.log(`  Actividades con contenido: ${stats.activities} · Juegos: ${stats.games}`);
console.log(`  Imágenes locales: ${stats.localImages} · Provisionales (picsum): ${stats.placeholderImages}`);
console.log(`  Áreas sin contenido aún: ${stats.emptyAreas} · Grupos sin áreas: ${stats.groupsWithoutAreas}`);
if (warnings.length) console.log(`\nAvisos (${warnings.length}, no bloquean):\n` + warnings.slice(0, 15).map(w => `  - ${w}`).join('\n') + (warnings.length > 15 ? `\n  … y ${warnings.length - 15} más` : ''));
if (errors.length) {
  console.error(`\n✗ ${errors.length} error(es):\n` + errors.map(e => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log('\n✓ Datos correctos');
