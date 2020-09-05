import * as pw from 'playwright';

const deviceList = [
  'Galaxy Note 3',
  'Galaxy Note 3 landscape',
  'Galaxy Note II',
  'Galaxy Note II landscape',
  'Galaxy S III',
  'Galaxy S III landscape',
  'Galaxy S5',
  'Galaxy S5 landscape',
  'LG Optimus L70',
  'LG Optimus L70 landscape',
  'Nexus 10',
  'Nexus 10 landscape',
  'Nexus 4',
  'Nexus 4 landscape',
  'Nexus 5',
  'Nexus 5 landscape',
  'Nexus 5X',
  'Nexus 5X landscape',
  'Nexus 6',
  'Nexus 6 landscape',
  'Nexus 6P',
  'Nexus 6P landscape',
  'Nexus 7',
  'Nexus 7 landscape',
  'Pixel 2',
  'Pixel 2 landscape',
  'Pixel 2 XL',
  'Pixel 2 XL landscape'
]

deviceList.forEach(async (device: string) => {
  const browser = await pw.chromium.launch()
  const context = await browser.newContext({
    ...pw.devices[device],
    locale: 'ja-JP'
  })
  const page = await context.newPage()
  await page.goto('http://whatsmyuseragent.org/')
  await page.screenshot({ path: `capture/device/android/${device.toLowerCase().replace(' ', '-')}.png` })
  await browser.close()
})