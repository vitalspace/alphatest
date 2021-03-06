
'use strict'
// ========== [ Dependencies ] ========== //
const puppeteer = require('puppeteer-core');
const path = require('path');
const dir = path.join(__dirname, './data');
// ========== [ Utils ] ========== //
// const { getExecutablePath } = require('');
const { getExecutablePath } = require('../utils/utils');
// ========== [ Run Program ] ========== //
const run = async () => {
    const executablePath = await getExecutablePath({});
    await lauchpuppeteer({ executablePath });
}
// ========== [ TIime ] ========== //
let date_ob = new Date();
// current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
// ========== [ Program ] ========== //
const lauchpuppeteer = async launchOptions => {
    const browser = await puppeteer.launch({
        headless: true,
        userDataDir: dir,
        args: [
            // `--app=${web}`,
            // '--window-size=800,600',
            '--disable-audio-output',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--disable-dev-shm-usage',
            '--no-sandbox', "--disable-setuid-sandbox"],
        ignoreDefaultArgs: ['--enable-automation'],
        ...launchOptions
    });

    const page1 = await browser.newPage();          // open new tab1
    await page1.goto('https://zonemovies.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page1.waitFor(5000)

    const page2 = await browser.newPage();          // open new tab1
    await page2.goto('https://bpintures.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page2.waitFor(5000)

    const page3 = await browser.newPage();          // open new tab1
    await page3.goto('https://poetsue.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page3.waitFor(5000)

    const page4 = await browser.newPage();          // open new tab1
    await page4.goto('https://datacloudy.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page4.waitFor(5000)

    const page5 = await browser.newPage();          // open new tab1
    await page5.goto('https://animspace.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page5.waitFor(5000)

    const page6 = await browser.newPage();          // open new tab1
    await page6.goto('https://animchildren.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page6.waitFor(5000)

    const page7 = await browser.newPage();          // open new tab1
    await page7.goto('https://shounems.gq ', { timeout: 0, waitUntil: "networkidle2" });
    await page7.waitFor(5000)

    const page8 = await browser.newPage();          // open new tab1
    await page8.goto('https://cerealtop.ga ', { timeout: 0, waitUntil: "networkidle2" });
    await page8.waitFor(5000)

    const page9 = await browser.newPage();          // open new tab1
    await page9.goto('https://sockone.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page9.waitFor(5000)

    const page10 = await browser.newPage();          // open new tab1
    await page10.goto('https://cheapcars.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page10.waitFor(5000)

    const page11 = await browser.newPage();          // open new tab1
    await page11.goto('https://animlove.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page11.waitFor(5000)

    const page12 = await browser.newPage();          // open new tab1
    await page12.goto('https://animmagic.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page12.waitFor(5000)

    const page13 = await browser.newPage();          // open new tab1
    await page13.goto('https://comedyc.cf ', { timeout: 0, waitUntil: "networkidle2" });
    await page13.waitFor(5000)

    const page14 = await browser.newPage();          // open new tab1
    await page14.goto('https://animsports.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page14.waitFor(5000)

    const page15 = await browser.newPage();          // open new tab1
    await page15.goto('https://animschool.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page15.waitFor(5000)

    const page16 = await browser.newPage();          // open new tab1
    await page16.goto('https://mybikes.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page16.waitFor(5000)

    const page17 = await browser.newPage();          // open new tab1
    await page17.goto('https://animfiction.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page17.waitFor(5000)

    const page18 = await browser.newPage();          // open new tab1
    await page18.goto('https://animmusic.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page18.waitFor(5000)

    const page19 = await browser.newPage();          // open new tab1
    await page19.goto('https://animgames.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page19.waitFor(5000)

    const page20 = await browser.newPage();          // open new tab1
    await page20.goto('https://animspeed.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page20.waitFor(5000)

    const page21 = await browser.newPage();          // open new tab1
    await page21.goto('https://animlaugh.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page21.waitFor(5000)

    const page22 = await browser.newPage();          // open new tab2
    await page22.goto('https://animmarts.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page22.waitFor(5000)

    const page23 = await browser.newPage();          // open new tab2
    await page23.goto('https://animbots.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page23.waitFor(5000)

    const page24 = await browser.newPage();          // open new tab2
    await page24.goto('https://viostrings.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page24.waitFor(5000)

    const page25 = await browser.newPage();          // open new tab2
    await page25.goto('https://animtion.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page25.waitFor(5000)

    const page26 = await browser.newPage();          // open new tab2
    await page26.goto('https://animdb.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page26.waitFor(5000)

    const page27 = await browser.newPage();          // open new tab2
    await page27.goto('https://arcabeast.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page27.waitFor(5000)

    const page28 = await browser.newPage();          // open new tab2
    await page28.goto('https://arcafun.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page28.waitFor(5000)

    const page29 = await browser.newPage();          // open new tab2
    await page29.goto('https://arcanum.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page29.waitFor(5000)

    const page30 = await browser.newPage();          // open new tab2
    await page30.goto('https://aventureclub.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page30.waitFor(5000)

    const page31 = await browser.newPage();          // open new tab2
    await page31.goto('https://blankstarts.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page31.waitFor(5000)

    const page32 = await browser.newPage();          // open new tab2
    await page32.goto('https://cinematix.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page32.waitFor(5000)

    const page33 = await browser.newPage();          // open new tab2
    await page33.goto('https://coperx.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page33.waitFor(5000)

    const page34 = await browser.newPage();          // open new tab2
    await page34.goto('https://exomove.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page34.waitFor(5000)

    const page35 = await browser.newPage();          // open new tab2
    await page35.goto('https://ezerox.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page35.waitFor(5000)

    const page36 = await browser.newPage();          // open new tab2
    await page36.goto('https://fightcadez.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page36.waitFor(5000)

    const page37 = await browser.newPage();          // open new tab2
    await page37.goto('https://galzbang.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page37.waitFor(5000)

    const page38 = await browser.newPage();          // open new tab2
    await page38.goto('https://hondaland.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page38.waitFor(5000)

    const page39 = await browser.newPage();          // open new tab2
    await page39.goto('https://moviemost.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page39.waitFor(5000)

    const page40 = await browser.newPage();          // open new tab2
    await page40.goto('https://musiciibdm.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page40.waitFor(5000)

    const page41 = await browser.newPage();          // open new tab2
    await page41.goto('https://nextdogs.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page41.waitFor(5000)

    const page42 = await browser.newPage();          // open new tab2
    await page42.goto('https://rxtype.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page42.waitFor(5000)

    const page43 = await browser.newPage();          // open new tab2
    await page43.goto('https://sidekicks.tk', { timeout: 0, waitUntil: "networkidle2" });
    await page43.waitFor(5000)

    const page44 = await browser.newPage();          // open new tab2
    await page44.goto('https://skateshops.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page44.waitFor(5000)

    const page45 = await browser.newPage();          // open new tab2
    await page45.goto('https://stringrank.gq', { timeout: 0, waitUntil: "networkidle2" });
    await page45.waitFor(5000)

    const page46 = await browser.newPage();          // open new tab2
    await page46.goto('https://thrillerzen.ga', { timeout: 0, waitUntil: "networkidle2" });
    await page46.waitFor(5000)

    const page47 = await browser.newPage();          // open new tab2
    await page47.goto('https://travelcia.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page47.waitFor(5000)

    const page48 = await browser.newPage();          // open new tab2
    await page48.goto('https://vialactium.cf ', { timeout: 0, waitUntil: "networkidle2" });
    await page48.waitFor(5000)

    const page49 = await browser.newPage();          // open new tab2
    await page49.goto('https://virtualbrawl.ga ', { timeout: 0, waitUntil: "networkidle2" });
    await page49.waitFor(5000)

    const page50 = await browser.newPage();          // open new tab2
    await page50.goto('https://westernmad.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page50.waitFor(5000)

    const page51 = await browser.newPage();          // open new tab2
    await page51.goto('https://westernwar.ml', { timeout: 0, waitUntil: "networkidle2" });
    await page51.waitFor(5000)

    const page52 = await browser.newPage();          // open new tab2
    await page52.goto('https://westpazck.cf', { timeout: 0, waitUntil: "networkidle2" });
    await page52.waitFor(5000)

    const page53 = await browser.newPage();          // open new tab2
    await page53.goto('https://weststorn.ga ', { timeout: 0, waitUntil: "networkidle2" });
    await page53.waitFor(5000)

}

console.log('Firts program', hours, ":", minutes, ':', seconds);
run();
