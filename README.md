# Learn Playwright
Playwrightを使って、利用可能なブラウザとデバイスでキャプチャを取得。キャプチャは`capture/`に保存。  
デバイスのほうは、処理が重くてメモリリーク起こすので注意。

## Playwrightとは
Microsoftから出されたブラウザ自動化ツール。以下のブラウザに対応。

- Chromium
- Firefox
- Webkit

## 注意点
まず、キャプチャを格納するディレクトリを作成する。  
以下コマンドを実行しない場合、`yarn test`がエラーになる。
``` bash 
$ yarn mkdir
```