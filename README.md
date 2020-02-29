# football-media

## Build

```sh
$ cd ./src

// build
$ yarn run build

$ cd ..

// cleanup public directory
$ rm -rf public/*

$ cp -R functions/nuxt/dist/ public/assets

$ cp -R src/static/* public
```

## firebase emulations

```sh
$ firebase serve --only hosting,functions
```

## Deploy

```
$ firebase deploy
```

## TypeScript

- [Cloud Functions に TypeScript を使用する](https://firebase.google.com/docs/functions/typescript?hl=ja)

## Links

- [Nuxt.jsとFirebaseでSPA×SSR×PWA×サーバーレスを実現する](https://inside.dmm.com/entry/2018/04/10/nuxt-firebase)
- [kamatte-me/nuxt-firebase-pwa](https://github.com/kamatte-me/nuxt-firebase-pwa)
- [Nuxt 2.5.1: promise is undefined](https://github.com/nuxt/nuxt.js/issues/5377)
- [関数のデプロイとランタイム オプションを管理する](https://firebase.google.com/docs/functions/manage-functions?hl=ja)

### Algolia

- [Nuxt.js+Algoliaで全文検索可能なタスク管理アプリを実装するハンズオン！](https://qiita.com/mido_app/items/919839aaf33382d9bc89)
- [Firebase Cloud FunctionsとAlgoliaの連携を試してみた](https://qiita.com/daikiojm/items/8e6d42d1e28b8ebf9f43)
- [イケてる全文検索サービス「Algolia」を触ってみよう](https://qiita.com/tschy/items/eefbb3a0dc60cd11ab9a)

