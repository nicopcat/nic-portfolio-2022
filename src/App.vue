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
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #111111;
  font-size: 16px;
  background: #fdce1f url("./assets/bg-coffee.png") fixed no-repeat 105% 100%/380px;
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
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon svg:hover {
  transform: scale(1.2);
  transition: 0.4s ease;
  background-color: #fdce1f;
}
</style>
