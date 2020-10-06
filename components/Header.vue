<template>
  <header class="header">
    <nuxt-link to="/" class="logo">
      <!-- Update your site logo text -->
      <span class="txt-color">F</span><span class="full-word">*k'in</span>
      <span class="txt-color">F</span><span class="full-word">ake</span>
      <span class="txt-color">N</span><span class="full-word">ews</span>
    </nuxt-link>
    <input
      class="menu-btn"
      type="checkbox"
      id="menu-btn"
      v-model="menuChecked"
    />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <!-- Page Links -->
      <li>
        <nuxt-link to="/post" @click.native="menuChecked = false"
          >거짓뉴스</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/fact" @click.native="menuChecked = false"
          >깨시민채널</nuxt-link
        >
      </li>
      <!-- <li>
        <nuxt-link to="/contact" @click.native="menuChecked = false"
          >후원하기</nuxt-link
        >
      </li> -->
      <!-- <li>
        <nuxt-link to="/about" @click.native="menuChecked = false"
          >FFN이란?</nuxt-link
        >
      </li> -->
    </ul>
  </header>
</template>

<script>
export default {
  props: ["menuChecked"],
};
</script>
