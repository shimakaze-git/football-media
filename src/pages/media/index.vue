<template>
  <div class="container"><!-- start main -->
    <div class="main row">
      <div class="col-md-8 blog_left">

        <ListVisualAreabar />

        <!-- <h2 class="style">Topics</h2> -->
        <div v-for="datas in videos" v-bind:key="datas.order">
          <div class="grids_of_4 row">
            <div class="col-md-3 images_1_of_4" v-for="video in datas.datas" v-bind:key="video.id">
              <div class="fancyDemo">
                <nuxt-link rel="group" :to="{ name: 'media-id', params: { id: video.id } }">
                  <img :src="videoThumbnail(video.link)" alt="" class="img-responsive"/>
                </nuxt-link>
              </div>
              <p>
                <a :href="video.link">{{ video.title }}</a>
              </p>
              <p class="para">{{ video.content }}</p>
              <div class="bs-component" style="margin-bottom: 20px;">
                <b-badge href="#" variant="light" v-for="tag in video.tags.split(',')" v-bind:key="tag">{{ tag }}</b-badge>
              </div>
              <footer class="blockquote-footer">
                <cite title="Bootstrap - Wikipedia">{{ video.publishedDate }}</cite>
              </footer>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
      <!-- <div class="col-md-4 blog_right"> -->
        <ListSidebar />
      </div>
      <div class="clearfix"></div>

    </div>
  </div><!-- end main -->

</template>

<script>
import ListVisualAreabar from '~/components/VisualAreabar.vue'
import ListSidebar from '~/components/ListSidebar.vue'
import url from 'url/url'

export default {
  name: 'MediaList',
  layout: 'mediaLayout',
  components: {
    ListVisualAreabar,
    ListSidebar,
  },
  async asyncData ({ app }) {
    // const response = await app.$axios.$get('https://httpbin.org/get');
    const viodes = await app.$videosApi.list()

    const videosList = [];
    for (let video of viodes) {
      const last = videosList[videosList.length - 1];
      if (!last || last.length === 4) {
        videosList.push([video]);
      } else {
        last.push(video);
      }
    }

    // 整形処理
    let parseVideosList = []
    let count = 1
    videosList.forEach(videos => {
      parseVideosList.push({
        'order': count,
        'datas': videos
      })
      count += 1
    })
    return { videos: parseVideosList }
  },
  methods: {
    videoThumbnail: function (link) {
      const urlParts = url.parse(link, true);
      return 'https://img.youtube.com/vi/' + urlParts.query['v'] + '/hqdefault.jpg'
      // maxresdefault.jpg
      // hqdefault.jpg
    }
  },
  data () {
    return {
      'videos': []
    }
  }
}
</script>

<style>
</style>
