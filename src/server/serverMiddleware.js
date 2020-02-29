function apiLog(req) {
  // console.log('req apiLog', req.path)
}


module.exports = function(options) {
  return function(req, res, next) {
    // console.log("options", options);

    // requestにapiを含んでいた場合の分岐処理
    if ( req.path.match(/api/)) {
        apiLog(req)
    }

    // req は Node.js の HTTPリクエストオブジェクトです
    // res は Node.js の HTTPレスポンスオブジェクトです

    // next は 次のミドルウェアを呼び出すための関数です。
    // あなたのミドルウェアが最後でない場合、関数の最後で next を呼び出すのを忘れないでください！
    next();
  };
};
