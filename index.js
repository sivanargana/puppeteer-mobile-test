const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3000;

app.get('/scrape', async (req, res) => {
  
    const browser = await puppeteer.launch({ headless: true });  
    const page = await browser.newPage();
    await page.goto("https://www.example.com/", { waitUntil: 'domcontentloaded' });

    res.send("hi")

});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
