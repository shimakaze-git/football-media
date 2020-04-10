import api from '@/services/api'

export default {
  fetchVideos () {
    let apiUrl = 'https://api.steinhq.com/v1/storages/5e511d66b88d3d04ae0814eb'
    apiUrl += '/playMovie'

    return api.get(apiUrl)
      .then(response => response.data)
      .catch(error => error.response)
  }
}
