<template>
  <div class="container"><!-- start main -->
    <div class="main row">
      <div class="col-md-8 blog_left">

        <!-- パンくず -->
        <!-- <ol class="breadcrumb" style="margin-bottom: 5px;">
          <li><a href="#">ホーム</a></li>
          <li><a href="#">ライブラリ</a></li>
          <li class="active">データ</li>
        </ol> -->

        <!-- <a :href="video.link">
          <img
            :src="videoThumbnail(video.link)"
            class="img-thumbnail"
            alt="Responsive image"
          />
        </a> -->

        <div class="blog_main">


          <!-- <h4>
            <a :href="video.link">{{ video.title }}</a>
          </h4> -->

          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              :src="videoUrl(video.link)"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              webkitallowfullscreen mozallowfullscreen allowfullscreen
            >
            <!-- width="560" -->
            <!-- height="315" -->
          </iframe>
          </div>
          <h4>
            <a :href="video.link">{{ video.title }}</a>
          </h4>

          <div class="blog_list pull-left">
            <ul class="list-unstyled">
              <li>
                <i class="fa fa-calendar"></i>
                <span>{{ video.publishedDate }}</span>
              </li>
              <li><a href="#">
                <i class="fa fa-eye"></i>
                <span>{{ video.views }} views</span></a>
              </li>
            </ul>
          </div>

          <div class="b_left pull-right">
            <a href="">
              <i class="fa fa-heart"></i>
            </a>
            <span>{{ good }}</span>
          </div>

          <div class="clearfix"></div>
          <p class="para">{{ video.content }}</p>

        </div>
        <hr>
      </div>

      <div class="col-md-4 blog_right">
        <ListSidebar />
      </div>
      <div class="clearfix"></div>

    </div>
  </div><!-- end main -->

</template>

<script>
import ListSidebar from '~/components/ListSidebar.vue'
import url from 'url/url'

export default {
  name: 'MediaIndex',
  layout: 'mediaLayout',
  components: {
    ListSidebar,
  },
  data () {
    return {
      'video': null,
      'id': 1,
      'Playtime': {
        'min': 3,
        'second': 30
      },
      'good': 34
    }
  },
  async asyncData ({ app, params }) {
    const video = await app.$videosApi.search({'id': params['id']})
    return { video: video[0] }
  },
  methods: {
    videoThumbnail: function (link) {
      const urlParts = url.parse(link, true);
      return 'https://img.youtube.com/vi/' + urlParts.query['v'] + '/hqdefault.jpg'
    },
    videoUrl: function (link) {
      const urlParts = url.parse(link, true);
      return "https://www.youtube-nocookie.com/embed/" + urlParts.query['v']
    },
    videoId: function (link) {
      const urlParts = url.parse(link, true);
      return urlParts.query['v'] 
    }
  }
}
</script>

<style>
</style>
