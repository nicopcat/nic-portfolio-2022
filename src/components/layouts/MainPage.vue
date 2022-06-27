<template>
  <section>
    <transition>
      <home-page></home-page>
    </transition>
    <my-works></my-works>
    <music-list></music-list>
    <contact-me></contact-me>
  </section>
</template>


<script>
import ContactMe from "../pages/ContactMe.vue";
import HomePage from "../pages/HomePage.vue";
import MyWorks from "../pages/MyWorks.vue";
import MusicList from "../pages/MusicList.vue";

export default {
  components: {
    HomePage,
    MyWorks,
    ContactMe,
    MusicList,
  },
};
</script>

<style scoped>
section {
  max-width: 720px;
  /* width: 80%; */
  margin: 0 auto;
  scroll-behavior: smooth;
}

@media screen and (max-width: 550px) {
  section {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
