const puppeteer = require("puppeteer");

async function openPage() {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.myheritage.com/');
    return { browser, page };
}

module.exports = openPage;
