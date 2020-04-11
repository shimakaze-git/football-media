<template>
  <div>
    <header class="header">
      <div class="header_wrapper">
        <div class="header_inside">
          <img
            class="header--mask_icon"
            src="https://zaiko.smoozapp.com/image/logo.png"
            width="32"
            height="32"
          />
          <p class="header--title_logo">フットボールメディア</p>
          <!-- <p class="header--by">by</p>
          <a class="header--smooz_logo" href="https://smoozapp.com/ja/" target="_blank&quot;&quot;">
            <img
              src="https://zaiko.smoozapp.com/image/smooz_logo.png"
            />
          </a> -->
        </div>
      </div>
      <div class="header--tab_container">
        <a :class="{'header--tab_wrapper': true, 'select': $route.path === '/'}" href="/" >全て</a>
        <a :class="{'header--tab_wrapper': true, 'select': $route.path === '/genre/japan'}" href="/genre/japan">日本人(海外)</a>
        <a :class="{'header--tab_wrapper': true, 'select': $route.path === '/genre/jlearge'}" href="/genre/jlearge">Jリーグ</a>
        <a :class="{'header--tab_wrapper': true, 'select': $route.path === '/genre/spain'}" href="/genre/spain">スペイン</a>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  // components: {},
  data() {
    return {}
  }
  // methods: {},
  // computed: {},
  // async created () {
  //   const path = this.$route.path
  // }
}
</script>

<style scoped>
@import "@/assets/css/app.css";

</style>
