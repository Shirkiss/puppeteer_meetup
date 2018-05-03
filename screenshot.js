const puppeteer = require('puppeteer');

async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.myheritage.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
};

takeScreenshot();