# EduStimula

Aplicación web interactiva de estimulación temprana y educación infantil (0–12 años), con actividades por edad y área de desarrollo: motricidad gruesa y fina, lenguaje, área social, percepción y cognición, además de juegos interactivos.

## Tecnologías

React 18 · TypeScript · Vite · Tailwind CSS · Lucide

## Ejecutar en local

**Requisitos:** Node.js 20 o superior

1. Instala las dependencias:
   `npm install`
2. Arranca el servidor de desarrollo:
   `npm run dev`
3. Genera la versión de producción:
   `npm run build`

## Despliegue

- **GitHub Pages:** automático al hacer push a `master` (`.github/workflows/deploy.yml`).
- **Netlify:** configurado en `netlify.toml`.

## Estructura

- `App.tsx`: interfaz y navegación.
- `data.ts`: contenido pedagógico (categorías, edades, áreas, actividades y juegos).
- `types.ts`: tipos de datos.
- `public/images`: imágenes de las actividades.
