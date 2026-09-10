# sato-clinic

佐藤医院のPC向けデザインを再現した静的Webサイトです。HTML / CSS を中心に構成し、支給素材のみを使用しています。

## ファイル構成

- `index.html` : TOPページ
- `information/index.html` : お知らせ
- `medical/index.html` : 診療内容
- `about/index.html` : 当院について
- `access/index.html` : 診療時間・所在地
- `faq/index.html` : よくあるご質問
- `data/news.json` : お知らせの一覧・本文データ
- `css/style.css` : 共通スタイル
- `js/script.js` : 将来拡張用
- `img/` : 支給画像素材

## 確認方法

`index.html` をブラウザで開いてください。

## 実装メモ

- 日本語フォントは Google Fonts の `Noto Sans JP` を読み込みます。
- 白を基調に、淡いグリーンを差し色として使用しています。
- PCレイアウトを優先して調整しています。
- 原稿は支給された「掲載原稿」をベースにしています。
- Googleマップの外部埋めを使用しています。

## お知らせの更新（GitHub Pages運用）

GitHub上で `data/news.json` を編集して `main` ブランチへ反映すると、GitHub Pagesの公開更新後にトップページ（新しい順に5件）とお知らせページ（全件・本文）が同時に更新されます。

お知らせは `id`、`date`（YYYY-MM-DD）、`tag`、`title`、`body`（段落ごとの配列）を入力します。`id` は英数字とハイフンのみで、ほかのお知らせと重複させません。サイト内の管理画面やブラウザ内保存は、お知らせの公開更新には使用しません。
