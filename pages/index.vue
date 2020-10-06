<template>
  <div class="home-container">
    <div class="u-full-width">
      <h1 class="site-title">
        <!-- Define Custom Site title or completely change the page -->
        F<span class="txt-color">F</span>N
      </h1>
      <p>깨시민을 위한 거짓,날조 뉴스 팩트 로그</p>
      <a class="no-highlighter" href="/post">
        <button class="button-primary">CATCH NOW FACT!</button>
      </a>
    </div>
    <!-- This is used to load the netlify identity widget so you can use Netlify CMS -->
    <script
      async
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    ></script>
  </div>
</template>

<script>
export default {
  // Define SEO Variables / Site Title, etc.
  head() {
    return {
      title: this.siteName || "FFN - 비러머글 거짓 뉴스 바로보기",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "거짓뉴스로 나라 망치는 언론, 깨시민이 바꾸는 길",
        },
      ],
    };
  },
  async asyncData({ env }) {
    const siteName = env.SITE_NAME;
    return {
      siteName,
    };
  },
};
</script>
