<template>
  <div>
    <!-- <div class="recommend-list">
      <a-row>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover"><img src="https://img1.wxzxzj.com/vpc-example-cover-your-name-v.jpg" alt="cover">
            <div class="date">2016</div>
            </div>
            <div class="detail">
            <div class="title">Your Name</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 01:46:04</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover"><img src="https://img1.wxzxzj.com/vpc-example-cover-CJ7-v.jpg" alt="cover">
            <div class="date">2008</div>
            </div>
            <div class="detail">
            <div class="title">CJ7</div>
            <div class="author">Stephen Chow</div>
            <div class="duration">Time: 00:46:04</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover">
            <img src="https://img.youtube.com/vi/dv21fcORqQE/hqdefault.jpg" alt="cover">
            <div class="date">2007</div>
            </div>
            <div class="detail">
            <div class="title">5 Centimeters per Second</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 1:02:35</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover"><img src="https://img1.wxzxzj.com/vpc-example-cover-5cm-v.jpg" alt="cover">
            <div class="date">2007</div>
            </div>
            <div class="detail">
            <div class="title">5 Centimeters per Second</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 1:02:35</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover"><img src="https://img1.wxzxzj.com/vpc-example-cover-the-garden-v.jpg" alt="cover">
            <div class="date">2013</div>
            </div>
            <div class="detail">
            <div class="title">The Garden of Words</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 00:46:04</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover">
            <img src="https://img.youtube.com/vi/dv21fcORqQE/hqdefault.jpg" alt="cover">
            <div class="date">2007</div>
            </div>
            <div class="detail">
            <div class="title">5 Centimeters per Second</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 1:02:35</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover"><img src="https://img1.wxzxzj.com/vpc-example-cover-5cm-v.jpg" alt="cover">
            <div class="date">2007</div>
            </div>
            <div class="detail">
            <div class="title">5 Centimeters per Second</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 1:02:35</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover"><img src="https://img1.wxzxzj.com/vpc-example-cover-your-name-v.jpg" alt="cover">
            <div class="date">2016</div>
            </div>
            <div class="detail">
            <div class="title">Your Name</div>
            <div class="author">Makoto Shinkai</div>
            <div class="duration">Time: 01:46:04</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div> -->

    <div class="recommend-list">
      <!-- {{ videos }} -->
      <!-- {{ video.link }} -->
      <a-row>
        <a-col :xs="12" :md="6" v-for='video in videos' :key='video.id'>
          <div class="movie-recommended" @click="changeMovie(video.id)">
            <div class="cover">
              <img :src='getYoutubeId(video.link)' alt="cover">
              <div class="date">{{ video.publishedDate }}</div>
            </div>
            <div class="detail">
              <div class="title">{{ video.title }}</div>
              <div class="author">{{ video.date }}</div>
              <div class="duration">Time: {{ video.time }}</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script>

export default {
  components: {},
  props: ['videos'],
  methods: {
    getYoutubeId (url) {
      let youtubeId = url.split('?v=')[1]
      // return 'https://img.youtube.com/vi/' + youtubeId + '/hqdefault.jpg'
      return 'https://img.youtube.com/vi/' + youtubeId + '/sddefault.jpg'
      // return 'https://img.youtube.com/vi/' + youtubeId + '/mqdefault.jpg'
    },
    changeMovie (id) {
      location.href = '/' + id
    }
  }
  // computed: {}
}
</script>

<style scoped>
@import "@/assets/css/app-core-video-player.css";
@import "@/assets/css/chunk-vendors.css";

/* 
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
*/
</style>
