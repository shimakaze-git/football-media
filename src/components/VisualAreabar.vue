<template>
  <div>
    <!-- <h2 class="style">Topics</h2> -->
    <div class="row">
      <div class="col-md-6">
        <div class="thumbnail">
          <!-- <img
            :src="left.thumbnailPath"
            class="img-responsive"
            alt="Responsive image"
          /> -->
          <!-- class="img-thumbnail" -->
          <div class="caption">
            {{ left }}
            <!-- <nuxt-link :to="left.url">
              <p>{{ left.title }}</p>
            </nuxt-link> -->
          </div>
        </div>
      </div>

      <!-- blog_left -->
      <div class="col-md-6">
        <div class="thumbnail">
          <!-- <img
            :src="right.thumbnailPath"
            class="img-responsive"
            alt="Responsive image"
          /> -->
          <!-- class="img-thumbnail" -->
          <div class="caption">
            {{ right }}
            <!-- <nuxt-link :to="right.url">
              <p>{{ right.title }}</p>
            </nuxt-link> -->
          </div>
        </div>
      </div>

    </div><!-- /.row -->
  </div>
</template>

<script>
import url from 'url/url'

export default {
  name: 'MediaListVisualAreabar',
//   props: {
//     left: {
//       type: Object,
//       required: true,
//     },
//     right: {
//       type: Object,
//       required: true,
//     }
//   },
  async asyncData ({ app }) {
    const params = { 'limit': 2 }
    const videos = await app.$videosApi.paramsList(params)
    console.log('videos', videos)
    return {
      left: videos[0],
      right: videos[1]
    }
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
      'videos': [],
      'left': {},
      'right': {},
    //   left: {
    //     'title': '魅せた！久保建英の超絶スキル＆ゴール＆アシスト集！2019/2020 HD「相手を壊滅」',
    //     'thumbnailPath': 'https://img.youtube.com/vi/_qIhVDucpd0/hqdefault.jpg',
    //     'url': '/media/1'
    //   },
    //   right: {
    //     'title': '[2019] 久保建英 Crazy Skills | Part 1 | Takefusa Kubo 17 years old',
    //     'thumbnailPath': 'https://img.youtube.com/vi/dv21fcORqQE/hqdefault.jpg',
    //     'url': '/media/2'
    //   }
    }
  }
}
</script>

<style></style>
