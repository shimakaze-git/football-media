<template>
  <div class="container"><!-- start main -->
    <div class="main row">
      <div class="col-md-8 blog_left">
        <ListSearchbar />
        <h2 class="style">list of projects</h2>

        <div v-for="datas in videos" v-bind:key="datas.order">
            <div class="grids_of_4 row">
            <div class="col-md-3 images_1_of_4" v-for="video in datas.datas" v-bind:key="video.id">
                <div class="fancyDemo">
                <a rel="group" title="" href="images/pic1.jpg">
                    <img src="~/assets/images/pic1.jpg" alt="" class="img-responsive"/>
                </a>
                </div>
                <h3>
                <a href="single-page.html">{{ video.title }}</a>
                </h3>
                <p class="para">{{ video.description }}</p>
                <div class="bs-component" style="margin-bottom: 20px;">
                <!-- <span class="badge badge-primary">Primary</span> -->
                <span class="badge badge-primary" v-for="tag in video.tags" v-bind:key="tag">{{ tag }}</span>
                </div>
                <!--
                <h4>
                <a href="single-page.html">{{ video.date }}</a>
                </h4>
                -->
                <footer class="blockquote-footer">
                <cite title="Bootstrap - Wikipedia">{{ video.date }}</cite>
                </footer>
            </div>
            <div class="clear"></div>
            </div>
        </div>
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
import ListSearchbar from '~/components/ListSearchbar.vue'

export default {
  name: 'MediaList',
  layout: 'mediaLayout',
  components: {
    ListSidebar,
    ListSearchbar
  },
  data () {
    return {
      videos: [
        {
          'order': 1,
          'datas': [
            {
              'id': 1,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            },
            {
              'id': 2,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            },
            {
              'id': 3,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            },
            {
              'id': 4,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            }
          ]
        },
        {
          'order': 2,
          'datas': [
            {
              'id': 5,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            },
            {
              'id': 6,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            },
            {
              'id': 7,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            },
            {
              'id': 8,
              'title': 'long established fact',
              'description': 'There are many variations of passages of Lorem Ipsum available,',
              'tags': ['ドリブル', 'パス', 'goal'],
              'date': '2019-11-20'
            }
          ]
        },
      ]
    }
  }
}
</script>

<style>
</style>
