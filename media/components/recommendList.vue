<template>
  <div>
    <div class="recommend-list">
      <a-row>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover">
              <img src="https://img1.wxzxzj.com/vpc-example-cover-your-name-v.jpg" alt="cover">
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
            <div class="cover">
              <img src="https://img1.wxzxzj.com/vpc-example-cover-CJ7-v.jpg" alt="cover">
              <div class="date">2008</div>
            </div>
            <div class="detail">
              <div class="title">CJ7</div>
              <div class="author">Stephen Chow</div>
              <div class="duration">Time: 00:46:04</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/app-core-video-player.css";
</style>
