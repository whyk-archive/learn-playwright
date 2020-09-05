import * as pw from 'playwright';

type BrowserList = [pw.BrowserType<pw.ChromiumBrowser>, pw.BrowserType<pw.FirefoxBrowser>, pw.BrowserType<pw.WebKitBrowser>];

[ 'chromium', 'firefox', 'webkit' ].forEach(async (type: string, index: number) => {
  const playwright: BrowserList[typeof index] = pw[type]
  const browser = await playwright.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('http://whatsmyuseragent.org/')
  await page.screenshot({ path: `capture/browser/${type}.png` })
  await browser.close()
})