import * as pw from 'playwright';

const deviceList: string[] = [
  'iPad (gen 6)',
  'iPad (gen 6) landscape',
  'iPad (gen 7)',
  'iPad (gen 7) landscape',
  'iPad Mini',
  'iPad Mini landscape',
  'iPad Pro 11',
  'iPad Pro 11 landscape',
  'iPhone 11',
  'iPhone 11 landscape',
  'iPhone 11 Pro',
  'iPhone 11 Pro landscape',
  'iPhone 11 Pro Max',
  'iPhone 11 Pro Max landscape',
  'iPhone X',
  'iPhone X landscape',
  'iPhone XR',
  'iPhone XR landscape',
  'iPhone 8',
  'iPhone 8 landscape',
  'iPhone 8 Plus',
  'iPhone 8 Plus landscape',
  'iPhone 7',
  'iPhone 7 landscape',
  'iPhone 7 Plus',
  'iPhone 7 Plus landscape',
  'iPhone 6',
  'iPhone 6 landscape',
  'iPhone 6 Plus',
  'iPhone 6 Plus landscape',
  'iPhone SE',
  'iPhone SE landscape',
]

deviceList.forEach(async (device: string) => {
  const browser = await pw.webkit.launch()
  const context = await browser.newContext({
    ...pw.devices[device],
    locale: 'ja-JP'
  })
  const page = await context.newPage()
  await page.goto('http://whatsmyuseragent.org/')
  await page.screenshot({ path: `capture/device/apple/${device.toLowerCase().replace(' ', '-')}.png` })
  await browser.close()
})