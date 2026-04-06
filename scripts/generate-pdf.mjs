import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Use print media so our @media print CSS kicks in
await page.emulateMedia({ media: 'print' });

await page.goto('http://localhost:4173', { waitUntil: 'networkidle', timeout: 30000 });

await page.pdf({
  path: 'dist/yuelong-chen-cv.pdf',
  format: 'A4',
  margin: { top: '1.5cm', right: '2cm', bottom: '1.5cm', left: '2cm' },
  printBackground: false,
  displayHeaderFooter: false,
});

await browser.close();
console.log('✓ PDF generated: dist/yuelong-chen-cv.pdf');
