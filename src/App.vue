<template>
  <div id="app" v-cloak>
    <the-header></the-header>
    <main-page></main-page>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import MainPage from "./components/layouts/MainPage.vue";
import BackToTop from "./components/utils/BackToTop.vue";

export default {
  components: {
    TheHeader,
    MainPage,
    BackToTop,
  },
};
</script>

<style >
#app {
  position: relative;
}
</style>
