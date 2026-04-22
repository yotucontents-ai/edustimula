import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true
});

const shot = async (page, name) => {
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: `/tmp/s_${name}.png` });
};

const click = async (page, text) => {
  await page.evaluate((t) => {
    for (const btn of document.querySelectorAll('button')) {
      if (btn.textContent.includes(t)) { btn.click(); return; }
    }
  }, text);
  await new Promise(r => setTimeout(r, 700));
};

const nav = async (steps) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  for (const s of steps) await click(page, s);
  return page;
};

// 1. Home
let p = await browser.newPage();
await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await p.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
await shot(p, '01_home');
await p.close();

// 2. Category A age groups
p = await nav(['Estimulación temprana']);
await shot(p, '02_catA');
await p.close();

// 3. 0-1 año tramos
p = await nav(['Estimulación temprana', '0 – 1']);
await shot(p, '03_tramos_01');
await p.close();

// 4. tramo 0-3 areas grid
p = await nav(['Estimulación temprana', '0 – 1', '0 - 3']);
await shot(p, '04_areas_tramo03');
await p.close();

// 5. Motricidad Gruesa subsections
p = await nav(['Estimulación temprana', '0 – 1', '0 - 3', 'Motricidad Gruesa']);
await shot(p, '05_gross_motor');
await p.close();

// 6. Language subsections (tramo 0-3)
p = await nav(['Estimulación temprana', '0 – 1', '0 - 3', 'Lenguaje']);
await shot(p, '06_language_tramo03');
await p.close();

// 7. 1-2 años tramos
p = await nav(['Estimulación temprana', '1 – 2']);
await shot(p, '07_tramos_12');
await p.close();

// 8. tramo 18-24 areas
p = await nav(['Estimulación temprana', '1 – 2', '18 - 24']);
await shot(p, '08_areas_1824');
await p.close();

// 9. Percepción tramo 18-24
p = await nav(['Estimulación temprana', '1 – 2', '18 - 24', 'Percepción']);
await shot(p, '09_perception_1824');
await p.close();

// 10. Ejercicios de memoria content
p = await nav(['Estimulación temprana', '1 – 2', '18 - 24', 'Percepción', 'memoria']);
await shot(p, '10_memory_content');
await p.close();

// 11. Social tramo 18-24
p = await nav(['Estimulación temprana', '1 – 2', '18 - 24', 'Social']);
await shot(p, '11_social_1824');
await p.close();

await browser.close();
console.log('Done');
