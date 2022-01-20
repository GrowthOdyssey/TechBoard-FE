# TechBoard-FE

## About
エンジニア向けの掲示板、記事投稿機能を付けたコミュニティサイトのフロントエンド。

## Dependency
- バージョンは下記を使用。

| package   | version |
| --------- | ------- |
| npm       | 6.14.5  |
| Node.js   | 14系以上 |
| React     | 17.0.0  |
| vite      | 2.6.13  |
| eslint    | 8.1.0   |
| prettier  | 2.4.1   |
| storybook | 6.4.13  |

## Setup

- リポジトリクローン後は下記コマンドを実行でパッケージファイルの取得。
```
$ npm ci
```

## Script
### ローカルサーバー起動
```
$ npm start
```

### ビルド
- ビルド実行時にeslint（構文チェック）、prettier（コード整形）、tsc（TS型チェック）を実行。
- ビルド後に成果物をdistファイルに出力。
```
$ npm run build
```

### storybook起動
```
$ npm run sb
```

### storybookビルド
```
$ npm run build-sb
```

## Production
https://tech-board.netlify.app/

## storybook
https://tech-board-storybook.netlify.app