const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

async function emulateDevices() {
 const browser = await puppeteer.launch({headless: false});
 const page = await browser.newPage();
 await page.emulate(devices['iPhone 6']);
 await page.goto('https://www.myheritage.com/');
 await page.screenshot({path: 'full.png', fullPage: true});
 await browser.close();
}

emulateDevices();