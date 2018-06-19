const openPage = require('../openPage');

test('Opening main page', async () => {
    const {browser, page} = await openPage();
    await browser.close();
},10000);
