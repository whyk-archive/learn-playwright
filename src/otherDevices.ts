import * as pw from 'playwright';

const deviceList: string[] = [
  'Blackberry PlayBook',
  'Blackberry PlayBook landscape',
  'BlackBerry Z30',
  'BlackBerry Z30 landscape',
  'JioPhone 2',
  'JioPhone 2 landscape',
  'Kindle Fire HDX',
  'Kindle Fire HDX landscape',
  'Microsoft Lumia 550',
  'Microsoft Lumia 550 landscape',
  'Microsoft Lumia 950',
  'Microsoft Lumia 950 landscape',
  'Nokia Lumia 520',
  'Nokia Lumia 520 landscape',
  'Nokia N9',
  'Nokia N9 landscape',
]

deviceList.forEach(async (device: string) => {
  const browser = await pw.firefox.launch()
  const context = await browser.newContext({
    ...pw.devices[device],
    locale: 'ja-JP'
  })
  const page = await context.newPage()
  await page.goto('http://whatsmyuseragent.org/')
  await page.screenshot({ path: `capture/device/other/${device.toLowerCase().replace(' ', '-')}.png` })
  await browser.close()
})