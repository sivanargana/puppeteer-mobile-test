const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3000;

app.get('/scrape', async (req, res) => {
  
try{
    const browser = await puppeteer.launch({ headless: true });  
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36")
    await page.goto("https://www.example.com/", { waitUntil: 'domcontentloaded' });

}catch(err){
    console.log(err)
}
    res.send("hi")

});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
