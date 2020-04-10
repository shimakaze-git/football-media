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
          <!-- <p class="header--by">by</p> -->
          <!-- <a class="header--smooz_logo" href="https://smoozapp.com/ja/" target="_blank&quot;&quot;">
            <img
              src="https://zaiko.smoozapp.com/image/smooz_logo.png"
            />
          </a> -->
        </div>
      </div>
      <div class="header--tab_container">
        <a class="header--tab_wrapper select" href="/" >全て</a>
        <a class="header--tab_wrapper" href="/japan" onclick="location.href = '/alcoholgel'">日本人(海外)</a>
        <a class="header--tab_wrapper" href="/jlearge" onclick="location.href = '/alcoholspray'">Jリーグ</a>
        <a class="header--tab_wrapper" href="/spain" onclick="location.href = '/alcoholgel'">スペイン</a>
      </div>
    </header>
  </div>
</template>

<style scoped>
@import "@/assets/css/app.css";

</style>
