import api from '@/services/api'

export default {
  fetchVideos (limit = 40, offset = 0) {
    let apiUrl = 'https://api.steinhq.com/v1/storages/5e511d66b88d3d04ae0814eb'
    apiUrl += '/playMovie'
    apiUrl += '?limit=' + String(limit) + '&offset=' + String(offset)

    return api.get(apiUrl)
      .then(response => response.data)
      .catch(error => error.response)
  },
  fetchVideoId (videoId=1) {
    let apiUrl = 'https://api.steinhq.com/v1/storages/5e511d66b88d3d04ae0814eb'
    apiUrl += '/playMovie'
    apiUrl += '?search={"id":"' + String(videoId) + '"}'

    return api.get(apiUrl)
      .then(response => response.data[0])
      .catch(error => error.response)
  },
  fetchVideosGenre (limit = 40, offset = 0, genre) {
    let apiUrl = 'https://api.steinhq.com/v1/storages/5e511d66b88d3d04ae0814eb'
    apiUrl += '/playMovie'
    apiUrl += '?limit=' + String(limit) + '&offset=' + String(offset)
    apiUrl += '&search={"genre":"' + String(genre) + '"}'

    return api.get(apiUrl)
      .then(response => response.data)
      .catch(error => error.response)
  },
}
