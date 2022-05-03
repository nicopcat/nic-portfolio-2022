<template>
  <base-wrapper>
    <section class="container">
      <div class="about-title">
        <base-button class="btn">ABOUT</base-button>
      </div>
      <div class="info-box">
        <div class="pic">
          <img src="./../.././assets/pic-01.jpg" alt="" />
        </div>
        <div class="info">
          <h3>Hi, I'm Nicole</h3>
          <p>C:\WINDOWS\System32>User>Nicole</p>

          <p>I'm a web developer and I like pretty designs.</p>

          <p>
            Occationally do some photography, enjoy music and reading books<span
              class="blink"
              >_</span
            >
          </p>
        </div>
      </div>
    </section>
  </base-wrapper>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  setup() {},
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  /* background-color: rgb(60, 99, 167); */
}

.about-title {
  border-bottom: 5px dashed black;
  margin-left: 10%;
  width: 100%;
  height: 75px;
  margin-top: 2rem;
  text-align: center;
}

.about-title .btn {
  width: 75px;
}

.info-box {
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-around; */
  margin-left: 10%;
  width: 550px;
  height: 320px;
  /* background-color: rgba(153, 205, 50, 0.685); */
}

.info-box .pic img {
  margin-top: 1rem;
  width: 100px;
  box-shadow: 3px 3px 0 rgb(125, 148, 219);
}
.info-box .info {
  max-width: 300px;
  max-height: 220px;
  width: 70%;
  height: 70%;
  margin: 3rem 2rem 0 6rem;

  /* background-color: #fff; */
  background-color: black;
}

.info-box .info h3 {
  margin: 0;
  padding: 0.5rem;
  font-family: monospace;
  font-size: 16px;
  background-color: #fdce1f;
  box-shadow: 3px 3px 0 royalblue;
  border-top: 2px solid white;
  border-left: 2px solid white;
}

.info-box .info p {
  padding: 0.3rem 0.5rem;
  font-family: monospace;
  font-size: 16px;
  color: rgb(35, 220, 35);
}
.blink {
  animation: 1s cursor-flicker infinite;
}
@keyframes cursor-flicker {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>