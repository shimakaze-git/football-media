<template>
  <div>
    <h2>新着動画リスト</h2>
    <div class="movie-item" v-for='video in videos' :key='video.id' @click='changeMovie(video.id)'>

      <div class="cover" style="width: 50%;">
        <img :src="getYoutubeLink(video.link)" alt="cover">
        <div class="duration">1:02:35</div>
      </div>
      <div class="detail" style="width: 50%;">
        <div class="title">{{ shortTitle(video.title) }}</div>
        <div class="author">Makoto Shinkai</div>
        <div class="date">2007</div>
      </div>

    </div>

    <!-- <img src="https://img1.wxzxzj.com/vpc-example-cover-5cm.png" alt="cover"> -->
    <!-- style="width: 240px" -->

    <!--
    <div class="movie-item">
      <div class="cover">
        <img src="https://img1.wxzxzj.com/vpc-example-cover-5cm.png" alt="cover">
        <div class="duration">1:02:35</div>
      </div>
      <div class="detail">
        <div class="title">5 Centimeters per Second</div>
        <div class="author">Makoto Shinkai</div>
        <div class="date">2007</div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import Video from '~/services/video'

export default {
  data() {
    return {
      videos: []
    }
  },
  methods: {
    getYoutubeLink (url) {
      let youtubeId = url.split('?v=')[1]
      return 'https://img.youtube.com/vi/' + youtubeId + '/sddefault.jpg'
    },
    fetchVideos () {
      let limit = 5
      let offset = 0

      // ビデオ取得
      Video.fetchVideos(limit, offset)
        .then(data => {
          this.videos = data
        })
        .catch()
    },
    changeMovie (id) {
      location.href = '/' + id
    },
    shortTitle (title) {
      return title.substring(0, 18)
    }
  },
  // computed: {},
  async created () {
    this.fetchVideos()
  }
}
</script>

<style scoped>
@import "@/assets/css/app-core-video-player.css";
/* @import "@/assets/css/app.css"; */
/* @import "@/assets/css/chunk-vendors.css"; */

.listImage {
  position: relative;
  /* width: 166px; */
  width: 50%;
  overflow: hidden;
  background: #000;
}
</style>
