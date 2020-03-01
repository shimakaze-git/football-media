export default axios => ({
  list() {
    const baseApiUrl = 'https://api.steinhq.com/v1/storages'
    const footballApiUrl = baseApiUrl + '/5e511d66b88d3d04ae0814eb/playMovie'
    return axios.get(footballApiUrl)
      .then(data => data.data)
      .catch(err => {throw err})
  },
  search(params) {
    const baseApiUrl = 'https://api.steinhq.com/v1/storages'
    const footballApiUrl = baseApiUrl + '/5e511d66b88d3d04ae0814eb/playMovie'
    return axios.get(footballApiUrl, {
        params: {
          'search': params
        }
      })
      .then(data => data.data)
      .catch(err => {throw err})
  },
  paramsList(params) {
    const baseApiUrl = 'https://api.steinhq.com/v1/storages'
    const footballApiUrl = baseApiUrl + '/5e511d66b88d3d04ae0814eb/playMovie'
    return axios.get(footballApiUrl, {
        params: params
      })
      .then(data => data.data)
      .catch(err => {throw err})
  },
})
