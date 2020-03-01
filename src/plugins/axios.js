export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    // リクエスト時にAuthorization　ヘッダを設定、設定値はlocalStorageのidTokenの値を使用する。
    // config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('idToken');
    // config.headers.common["Authorization"] = `Bearer token`;

    config.headers.common["Accept"] = "application/json";
    config.headers.common["X-Requested-With"] = "XMLHttpRequest";
  });

  $axios.onResponse(response => {
    return Promise.resolve(response);
  });

  $axios.onError(error => {
    if (!error.response) {
      return;
    }

    // const code = error.response.status
    // if (code === 401) {
    //   redirect('/login')
    // }
    return Promise.reject(error.response);
  });
}
