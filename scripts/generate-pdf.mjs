import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('http://localhost:4173', { waitUntil: 'networkidle', timeout: 30000 });

// Scroll through the whole page so any lazy-loaded content / JS triggers
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let total = 0;
    const step = 400;
    const timer = setInterval(() => {
      window.scrollBy(0, step);
      total += step;
      if (total >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 100);
  });
});

// Let everything settle
await page.waitForTimeout(1000);

// Switch to print media so @media print CSS kicks in
await page.emulateMedia({ media: 'print' });

await page.pdf({
  path: 'dist/yuelong-chen-cv.pdf',
  format: 'A4',
  margin: { top: '1.5cm', right: '2cm', bottom: '1.5cm', left: '2cm' },
  printBackground: false,
  displayHeaderFooter: false,
});

await browser.close();
console.log('✓ PDF generated: dist/yuelong-chen-cv.pdf');
