import { existsSync, mkdirSync } from 'fs';

const folderList = [
  'capture',
  'capture/browser',
  'capture/device',
  'capture/device/android',
  'capture/device/apple',
  'capture/device/other',
]

folderList.forEach(folder => {
  if(!existsSync(folder)) mkdirSync(folder)
})