<template>
  <div>
    <div class="h-screen bg-blue-200"></div>
    <div class="h-screen bg-blue-300"></div>
    <div class="h-screen bg-blue-400"></div>
    <div class="h-screen bg-blue-500"></div>
    <div class="h-screen bg-blue-600"></div>
    <transition name="fade">
      <div id="pagetop" class="pointer" v-show="scY > 300" @click="toTop">
        <svg
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4a5568"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.pointer {
  position: absolute;
  bottom: -20px;
  right: 10px;
  background: wheat;
  cursor: pointer;
}
</style>