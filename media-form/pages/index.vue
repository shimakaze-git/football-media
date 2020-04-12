<template>
  <div class="container">
    <div>
      <logo />
      <h1>動画投稿フォーム</h1>
      <form class="p-form">
        <div class="p-formGroup u-mb20">
          <label for="title">動画タイトル</label>
          <input v-model='title' type="text" id="title" name="entry.151771775" equired>
        </div>

        <div class="p-formGroup u-mb20">
          <label for="content">詳細</label>
          <textarea v-model='content' id="content" name="entry.407332609" required></textarea>
        </div>

        <div class="p-formGroup u-mb20">
          <label for="link">動画リンク</label>
          <input v-model='link' id="link" name="entry.1958805871" required>
        </div>

        <div class="p-formGroup u-mb20">
          <label for="date">公開日</label>
          <input type="date" id="date" name="date" v-model='date'>
          <!-- <input type="hidden" name="entry.1130176626_year" jsname="L9xHkb_year"> -->
          <!-- <input type="hidden" name="entry.1130176626_month" jsname="L9xHkb_month"> -->
          <!-- <input type="hidden" name="entry.1130176626_day" jsname="L9xHkb_day"> -->
        </div>

        <div class="p-formGroup u-mb20">
          <label for="link">投稿日</label>
          <input type="date" id="publishedDate" name="publishedDate" v-model='publishedDate'>
          <!-- <input type="hidden" name="entry.2042014638_year" jsname="L9xHkb_year"> -->
          <!-- <input type="hidden" name="entry.2042014638_month" jsname="L9xHkb_month"> -->
          <!-- <input type="hidden" name="entry.2042014638_day" jsname="L9xHkb_day"> -->
        </div>

        <div class="p-formGroup u-mb20">
          <label for="view">再生数</label>
          <input v-model='view' type="text" id="view" name="entry.766508871" required>
        </div>

        <div class="p-form__btn">
          <input type="submit" value="送信する">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      title: '',
      content: '',
      link: '',
      date: '',
      publishedDate: '',
      view: 0
    }
  },
  methods: {
    submit: function () {
      const submitParams = new FormData();
    
      // お問い合わせ内容のname属性値
      // submitParams.append("entry.123456789", this.contactType);
    
      // お名前のname属性値
      // submitParams.append("entry.123456789", this.userName);
    
      // メールアドレスのname属性値
      // submitParams.append("entry.123456789", this.email);
    
      // ご依頼内容のname属性値
      // submitParams.append("entry.123456789", this.content);

      // CORSエラー対策
      // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      // Googleフォームのaction属性値
      // const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/(Googleフォームからコピペしてください)";

    //   // Ajax POST通信
    //   axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams).then(res => {
    //     // フォーム非表示
    //     this.showForm = false;
    //   });
    //   // フォーム非表示
    //   this.showForm = false;

      // action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHB81F63J2ChjEcCBmbD39CGXb3q4n5WgqkvFCd6Wag2FnMA/formResponse"
    }
  }
}
</script>

<style>
@import "@/assets/css/common.css";
@import 'https://cdn.jsdelivr.net/npm/yakuhanjp@3/dist/css/yakuhanjp_s.min.css';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
