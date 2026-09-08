# sato-clinic

佐藤医院のPC向けデザインを再現した静的Webサイトです。HTML / CSS を中心に構成し、支給素材のみを使用しています。

## ファイル構成

- `index.html` : TOPページ
- `information/index.html` : お知らせ
- `medical/index.html` : 診療内容
- `about/index.html` : 当院について
- `access/index.html` : 診療時間・所在地
- `faq/index.html` : よくあるご質問
- `css/style.css` : 共通スタイル
- `js/script.js` : 将来拡張用（現状は機能なし）
- `img/` : 支給画像素材

## 確認方法

`index.html` をブラウザで開いてください。

## 実装メモ

- 日本語フォントは Google Fonts の `Noto Sans JP` を読み込みます。
- 白を基調に、淡いグリーンを差し色として使用しています。
- PCレイアウトを優先して調整しています。
- 原稿は支給された「掲載原稿」をベースにしています。
- Googleマップは外部埋め込みではなく、支給素材 `img/map.jpg` を使用しています。
