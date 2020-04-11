<template>
  <div class="card_wrapper">
    <table class="card_table">
      <mediaList :videos='videos' />
    </table>
  </div>
</template>

<script>
import Video from '~/services/video'
import Logo from '~/components/Logo.vue'
import mediaList from '~/components/mediaList.vue'

export default {
  components: {
    mediaList,
    Logo
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    fetchVideos (page, genre) {
      let limit = 40
      let offset = (page-1) * limit

      // 特定のジャンルのビデオ取得
      Video.fetchVideosGenre(limit, offset, genre)
        .then(data => {
          this.videos = data
        })
        .catch()
    }
  },
  // computed: {},
  async created () {
    const genre = this.$route.params.genre
    let page = 1
    if ('page' in this.$route.query) {
      page = this.$route.query.page
    }
    this.fetchVideos(page, genre)
  }
}
</script>

<style scoped>
@import "@/assets/css/app.css";
</style>
