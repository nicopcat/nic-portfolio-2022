<template>
  <the-header></the-header>
  <the-wrapper></the-wrapper>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheWrapper from "./components/layouts/TheWrapper.vue";

export default {
  components: {
    TheHeader,
    TheWrapper,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  color: #111111;
  font-size: 16px;
  background: #fdce1f url("./assets/bg-coffee.png") fixed no-repeat right
    bottom/24%;
}
a {
  list-style: none;
  color: #111111;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  margin: 0;
  padding: 0;
}
</style>
