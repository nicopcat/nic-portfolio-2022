<template>
  <base-wrapper>
    <section class="container">
      <base-button class="btn"> About Me </base-button>
      <div class="info-box">
        <div class="pic">
          <img src="./../.././assets/pic-01.jpg" alt="" />
        </div>
        <div class="info">
          <h3>Hi, I'm Nic</h3>
          <p>C:\WINDOWS\User\Nic</p>
          <p>I'm a web developer and I like pretty designs.</p>
          <p>
            Occationally do some photography, enjoy music and reading books<span class="blink">_</span>
          </p>
        </div>
      </div>
    </section>
  </base-wrapper>
</template>

<script>
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
export default {
  methods: {
    loadAnimation() {
      const tl = gsap.timeline();
      tl.fromTo(
        ".pic",
        { x: 40, opacity: 0 },
        { x: -20, duration: 2, ease: "bounce.out", opacity: 1 }
      );
      tl.to(
        ".info",
        {
          y: 30,
          duration: 1,
          ease: "back.in",
        },
        "-=2"
      );
    },
  },
  mounted() {
    this.loadAnimation();
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 2rem;


  .btn {
    width: 4rem;
  }

  .info-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    margin-left: 10%;

    .pic {
      img {
        margin-top: 1rem;
        width: 100px;
        box-shadow: 3px 3px 0 rgb(125, 148, 219);
      }
    }

    .info {
      max-width: 350px;
      max-height: 260px;
      width: 70%;
      margin: 2rem;
      background-color: black;

      .blink {
        animation: 1s cursor-flicker infinite;
      }

      h3 {
        margin: 0;
        padding: 0.5rem;
        font-family: monospace;
        font-size: 15px;
        background-color: #fdce1f;
        box-shadow: 3px 3px 0 royalblue;
        border-top: 2px solid white;
        border-left: 2px solid white;
      }

      p {
        padding: 0.4rem 0.5rem;
        font-family: monospace;
        font-size: 16px;
        color: rgb(35, 220, 35);
      }
    }


  }
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

@media screen and (max-width: 450px) {
  .info {
    margin-top: 10px !important;
    width: 70vw !important;
  }
}
</style>
