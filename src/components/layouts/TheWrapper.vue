<template>
  <section>
    <transition>
      <home-page></home-page>
    </transition>
    <my-works></my-works>
    <contact-me></contact-me>
  </section>
</template>
<script>
import ContactMe from "../pages/ContactMe.vue";
import HomePage from "../pages/HomePage.vue";
import MyWorks from "../pages/MyWorks.vue";

export default {
  components: {
    HomePage,
    MyWorks,
    ContactMe,
  },
};
</script>

<style scoped>
section {
  /* max-width: 720px; */
  width: 70%;
  margin: 0 auto;
  scroll-behavior: smooth;
}

@media screen and (max-width: 450px) {
  section {
    width: 100vw;
    margin: 0 auto;
  }
}
</style>
