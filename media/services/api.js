const axiosBase = require('axios')

const apiBase = axiosBase.create({
  // baseURL: 'http://localhost:4000',
  // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
})

module.exports = apiBase
