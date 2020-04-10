<template>
  <div>
    <!-- <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing" ref="youtube"></youtube> -->
    <!-- <button @click="playVideo">play</button> -->

    <!-- 100% -->
    <!-- width="560" -->
    <!-- height="315" -->
    <iframe
      width='100%'
      height="315"
      :src='videoUrl'
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      ref="youtube"
    ></iframe>
    <button @click="playVideo">play</button>
  </div>
</template>

<script>

export default {
  props: ['videoId'],
  data() {
    return {
      videoUrl: 'https://www.youtube-nocookie.com/embed/' + this.videoId + '?autoplay=1',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playVideo() {
      console.log('this.$refs', this.$refs)
      // this.player.playVideo()
      // this.$refs.youtube.player.playVideo()
    },
    playing() {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style scoped>
/* @import "@/assets/css/app.css"; */
/* @import "@/assets/css/chunk-vendors.css"; */

/*
iframe {
  width: 100%;
  max-width: 650px;
}
*/
</style>
