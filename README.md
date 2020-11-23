# Learn Playwright
Playwrightを使って、利用可能なブラウザとデバイスでキャプチャを取得。キャプチャは`capture/`に保存。  
デバイスのほうは、処理が重くてメモリリーク起こすので注意。

## Playwrightとは
Microsoftから出されたブラウザ自動化ツール。以下のブラウザに対応。

- Chromium
- Firefox
- Webkit

## 注意点
### `yarn test`のメモリリーク
`yarn test`はキャプチャの処理が重くてメモリリークを起こす。  
そのため、各個の動作が見たい場合は以下`yarn test:*`を推奨。

``` bash
yarn test:allbrowser # Chrome, Firefox, Webkit
yarn test:appledevice # playwrightに存在するすべてのAppleモバイルデバイス（ブラウザはWebkit）
yarn test:androiddevice # playwrightに存在するすべてのAndroidモバイルデバイス（ブラウザはChrome）
yarn test:otherdevice # playwrightに存在するBlackberryなどのその他モバイルデバイス（ブラウザはFirefox）
```

### キャプチャフォルダの事前作成
テストを走らせる前にキャプチャ格納用のフォルダを作成しないとエラーになる。
`yarn test:*`は、事前に以下を実行する必要がある。
``` bash 
$ yarn mkdir
```