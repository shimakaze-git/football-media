<template>
  <div class='media-box'>
    <a-row>
      <a-col :xs="24" :md="16" class='video-box'>
        <div id="vue-core-video-player-box" class="player" v-if='videoId'>
          <youtubeFrame :videoId='videoId' />
        </div>

        <div class="movie-detail">
          <h1 class="title">{{ name }}</h1>
          <!-- <div class="date">Makoto Shinkai - 2016</div> -->
          <div class="date">{{ date }}</div>
          <div class="desc">{{ description }}</div>
          <!-- <div class="btn-wrap">
            <button type="button" class="btn btn-outline-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="#ff6060">
                <path d="M5 15a.502.502 0 0 1-.354-.146l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .707.707L1.707 10.5l3.646 3.646a.5.5 0 0 1-.354.853zM15 15a.5.5 0 0 1-.354-.853l3.646-3.646-3.646-3.646a.5.5 0 0 1 .707-.707l4 4a.5.5 0 0 1 0 .707l-4 4a.498.498 0 0 1-.354.146zM7.5 15a.5.5 0 0 1-.424-.765l5-8a.5.5 0 0 1 .848.53l-5 8A.5.5 0 0 1 7.5 15z"></path>
              </svg>View Code 
            </button>
          </div> -->
          <hr />
          <div class="movie-item" @click="changeMovie()">
            <div class="cover" v-if='videoId'>
              <img :src='getYoutubeThumbnail' alt="cover">
              <div class="duration">{{ time }}</div>
            </div>
            <div class="detail">
              <div class="title">{{ name }}</div>
              <!-- <div class="author">{{ publishedDate }}</div> -->
              <div class="date">{{ publishedDate }}</div>
            </div>
          </div>
          <!-- <hr /> -->

          <!-- <playerCard /> -->
          <!-- <recommendList /> -->
        </div>

        <div class="thanks">
          <!-- ❤ Video Source via Makoto Shinkai and Stephen Chow's Movies -->
        </div>

      </a-col>
      <a-col :xs="24" :md="8" class='play-list'>
        <NewMovieList />
      </a-col>
    </a-row>

  </div>
</template>

<script>
import Video from '~/services/video'
import Logo from '~/components/Logo.vue'
import mediaList from '~/components/mediaList.vue'
import NewMovieList from '~/components/NewMovieList.vue'
import youtubeFrame from '~/components/youtubeFrame.vue'
// import recommendList from '~/components/recommendList.vue'
// import playerCard from '~/components/playerCard.vue'

export default {
  components: {
    mediaList,
    // recommendList,
    // playerCard,
    NewMovieList,
    Logo,
    youtubeFrame
  },
  data() {
    return {
      movieId: null,
      videoId: "",
      name: '',
      description: '',
      link: '',
      publishedDate: '',
      date: '',
      time: ''
    }
  },
  methods: {
    fetchVideo () {
      Video.fetchVideoId(this.movieId)
        .then(data => {
          this.videoId = data.link.split('?v=')[1]
          this.name = data.title
          this.description = data.content

          this.link = data.link
          this.publishedDate = data.publishedDate
          this.date = data.date

          this.time = data.time
        })
        .catch()
    },
    changeMovie () {
      location.href = this.link
    }
  },
  async created () {
    this.movieId = this.$route.params.id
    this.fetchVideo()
  },
  computed: {
    getYoutubeThumbnail () {
      return 'https://img.youtube.com/vi/' + this.videoId + '/sddefault.jpg'
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/app-core-video-player.css";
/* @import "@/assets/css/app.css"; */
@import "@/assets/css/chunk-vendors.css";

.media-box {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  max-width: 944px;
}

.video-box {
  position: relative;
  /* width: 100%; */
  padding-right: 15px;
  padding-left: 15px;
}

.player {
  position: relative;
  /* height: 410px; */
  /* background-color: #000; */
  font-weight: 400;
}

.play-list {
  position: relative;
  /* width: 100%; */
  padding-right: 15px;
  padding-left: 15px;
}
</style>
