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

## Links

- [Nuxt.jsとFirebaseでSPA×SSR×PWA×サーバーレスを実現する](https://inside.dmm.com/entry/2018/04/10/nuxt-firebase)
- [kamatte-me/nuxt-firebase-pwa](https://github.com/kamatte-me/nuxt-firebase-pwa)
- [Nuxt 2.5.1: promise is undefined](https://github.com/nuxt/nuxt.js/issues/5377)
