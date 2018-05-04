const puppeteer = require('puppeteer');

async function maximizeScreen() {


    const browser = await puppeteer.launch({
        headless: false,
        args: [`--start-maximized`],
    });

    const page = await browser.newPage();
    width = await page.evaluate(async () => await window.screen.availWidth);
    height = await page.evaluate(async () => await window.screen.availHeight);
    await page.setViewport({ width, height });
    await page.goto('https://www.myheritage.com/dna');

    await browser.close();

};


maximizeScreen();