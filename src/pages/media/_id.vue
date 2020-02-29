<template>
  <div class="container"><!-- start main -->
    <div class="main row">
      <div class="col-md-8 blog_left">
        <ListSearchbar />
        <!-- <h2 class="style">list of projects</h2> -->
        
        <!-- <h2 class="style">our recent blogs</h2> -->
        <div class="blog_main">

          <a href="single-page.html"><img src="images/blog_pic1.jpg" alt="" class="blog_img img-responsive"/></a>
          <h4>
            <a href="single-page.html">Lorem Ipsum is simply dummy text of the printingy </a>
          </h4>

          <div class="blog_list pull-left">
            <ul class="list-unstyled">
              <li><i class="fa fa-calendar-o"></i><span>June 3, 2013</span></li>
              <li><a href="#"><i class="fa fa-comment"></i><span>Comments</span></a></li>
              <li><i class="fa fa-user"></i><span>Admin</span></li>
              <li><a href="#"><i class="fa fa-eye"></i><span>124 views</span></a></li>
            </ul>
          </div>

          <div class="b_left pull-right">
            <a href=""><i class="fa fa-heart"></i><span> 28</span></a>
          </div>

          <div class="clearfix"></div>
          <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
          <div class="read_more btm">
            <a href="single-page.html">view more</a>
          </div>
        </div>

        <!-- <div class="blog_main">
        <iframe src="//player.vimeo.com/video/25541923?color=c9161f" width="100%" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <h4><a href="single-page.html">Lorem Ipsum is simply dummy text of the printingy </a></h4>
        <div class="blog_list pull-left">
        <ul class="list-unstyled">
        <li><i class="fa fa-calendar-o"></i><span>June 3, 2013</span></li>
        <li><a href="#"><i class="fa fa-comment"></i><span>Comments</span></a></li>
        <li><i class="fa fa-user"></i><span>Admin</span></li>
        <li><a href="#"><i class="fa fa-eye"></i><span>124 views</span></a></li>
        </ul>
        </div>
        <div class="b_left pull-right">
        <a href=""><i class="fa fa-heart"></i><span>357</span></a>
        </div>
        <div class="clearfix"></div>
        <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
        <div class="read_more btm">
        <a href="single-page.html">view more</a>
        </div>
        </div> -->

        <hr>

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
  name: 'MediaIndex',
  layout: 'mediaLayout',
  components: {
    ListSidebar,
    ListSearchbar
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
