<template>
  <div>
    <!-- recommend-list -->
    <div class="player-list">
      <h2>主な登場選手</h2>
      <a-row>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <a-card hoverable>
              <!-- style="width: 240px" -->
              <img
                alt="example"
                src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20190712%2F14%2F10144714%2F3%2F333x499xcc63a37fd8001391d8af60c6.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r"
                slot="cover"
              />
              <a-card-meta title="久保建英">
                <template slot="description">Age: 18</template>
                <!-- <template slot="description">www.instagram.com</template> -->
              </a-card-meta>
            </a-card>
          </div>
        </a-col>
        <a-col :xs="12" :md="6">
          <div class="movie-recommended">
            <div class="cover">
              <img src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20190712%2F14%2F10144714%2F3%2F333x499xcc63a37fd8001391d8af60c6.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r" alt="cover">
              <div class="date">日本人</div>
            </div>
            <div class="detail">
              <div class="title">久保建英</div>
              <div class="author">Japanese</div>
              <div class="duration">Age: 18</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/app-core-video-player.css";

.player-list {
  /* margin-top: 40px; */
  padding-top: 20px;
  /* padding-bottom: 40px; */
  border-top: 1px solid #ddd;
}
</style>
