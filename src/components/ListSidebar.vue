<template>
  <div>
    <ul class="ads_nav list-unstyled">
      <!-- <h4>Ads 125 x 125</h4> -->
      <li>
        <a href="#"><img src="~/assets/images/ads_pic.jpg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="~/assets/images/ads_pic.jpg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="~/assets/images/ads_pic.jpg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="~/assets/images/ads_pic.jpg" alt="" /></a>
      </li>
      <div class="clearfix"></div>
    </ul>
    <ul class="tag_nav list-unstyled">
      <h4>tags</h4>
      <li class="active"><a href="#">art</a></li>
      <li v-for="tag in tags" v-bind:key="tag.id">
        <a href="#">{{ tag.name }}</a>
      </li>
      <div class="clearfix"></div>
    </ul>
    <!-- start social_network_likes -->

    <div class="social_network_likes">
      <ul class="list-unstyled">
        <li>
          <a href="#" class="tweets">
            <div class="followers">
              <p><span>2k</span>Followers</p>
            </div>
            <div class="social_network">
              <i class="twitter-icon"> </i>
            </div>
          </a>
        </li>
        <li><a href="#" class="facebook-followers"><div class="followers"><p><span>5k</span>Followers</p></div><div class="social_network"><i class="facebook-icon"> </i> </div></a></li>
        <li><a href="#" class="email"><div class="followers"><p><span>7.5k</span>members</p></div><div class="social_network"><i class="email-icon"> </i></div> </a></li>
        <li><a href="#" class="dribble"><div class="followers"><p><span>10k</span>Followers</p></div><div class="social_network"><i class="dribble-icon"> </i></div></a></li>
        <div class="clear"> </div>
      </ul>
    </div>

    <!-- <div class="news_letter">
      <h4>news letter</h4>
      <form>
        <span><input type="text" placeholder="Your email address"></span>
        <span  class="pull-right fa-btn btn-1 btn-1e">
          <input type="submit" value="subscribe">
        </span>
      </form>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MediaListSidebar',
  data () {
    return {
      tags: [
        {
          'id': 1,
          'name': '日本人'
        },
        {
          'id': 2,
          'name': 'ドリブル'
        }
      ],
    }
  }
}
</script>

<style></style>
