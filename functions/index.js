const functions = require("firebase-functions");
const express = require("express");
const { Nuxt } = require("nuxt");

const app = express();
const nuxt = new Nuxt({
  dev: false,
  buildDir: "nuxt",
  build: {
    publicPath: "/assets/"
  }
});

let isReady = false
const readyPromise = nuxt.ready().then(() => {
  isReady = true
}).catch(() => {
  process.exit(1)
})

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise;
  }
  res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
  await nuxt.render(req, res);
}

app.get("*", handleRequest);
app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
