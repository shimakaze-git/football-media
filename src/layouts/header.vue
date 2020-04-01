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
        <a class="header--tab_wrapper select">マスク</a>
        <a class="header--tab_wrapper" href="/" onclick="location.href = '/alcoholgel'">アルコールジェル</a>
        <a class="header--tab_wrapper" href="/" onclick="location.href = '/alcoholspray'">アルコールスプレー</a>
      </div>
    </header>
  </div>
</template>

<style scoped>
@import "@/assets/css/app.css";

</style>
