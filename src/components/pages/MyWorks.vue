<template>
  <base-wrapper>
    <section class="container" id="projs">
      <base-button class="btn"> Featured Projects </base-button>
      <div class="works">
        <div class="items" v-for="(item, index) in worksList" :key="index">
          <h3>{{ item.works_title }}</h3>
          <div class="details">
            <div class="details-show">
              <!-- <div class="shadow"></div> -->
              <a :href="item.works_url" target="_blank"
                ><img :src="item.works_screenshot"
              /></a>
            </div>
            <div class="para">
              <h4>Stacks</h4>
              <span>{{ item.stacks }}</span>
              <p>{{ item.intro }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="burger">
        <img src="@/assets/shackburge-removebg-preview.png" alt="burger" />
      </div>
    </section>
  </base-wrapper>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      worksList: {
        // 图片导入需要用require
        vue_shop_admin: {
          works_title: "Vue Shop Admin",
          works_url: "https://vue2-shop-admin.vercel.app/",
          works_screenshot: require("@/assets/img/works/vue_shop_admin_screenshot.png"),
          stacks: "Vue 2, Element-UI",
          intro: "采用主流技术栈搭建的一套电商后台管理系统",
        },
        dodo: {
          works_title: "Dodo",
          works_url: "https://just-dodo.netlify.app/",
          works_screenshot: require("@/assets/img/works/dodo-screentshot.png"),
          stacks: "Vue 3, Vue(vuex), localStorage",
          intro: "一开始为 jQuery 版本，后采用 Vue 重构",
        },
        find_a_coach: {
          works_title: "Find Coaches",
          works_url: "https://find-a-coach-or-become-one.netlify.app/",
          works_screenshot: require("@/assets/img/works/coach-screenshot.png"),
          stacks: "Vue 全家桶",
          intro: "",
        },
        simple_weather: {
          works_title: "Simple Weather",
          works_url: "https://weather-app-page.vercel.app/",
          works_screenshot: require("@/assets/img/works/weather-screenshot.png"),
          stacks: "Vue",
          intro: "一款简单的天气 SAPs.",
        },
      },
    };
  },
  methods: {
    loadIt() {
      gsap.registerPlugin(ScrollTrigger);

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top",
          end: "bottom",
          toggleActions: "play pause resume reset",
          scrub: true,
        },
      });

      tl1.from(".works h3", {
        x: 100,
        duration: 0.5,
        ease: "out-in",
      });

      // 汉堡动起来
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#music",
          start: "top bottom",
          end: "+=500",
          toggleActions: "play pause resume reset",
          scrub: true, // locking animation
          // markers: true,
        },
      });

      tl2.fromTo(
        ".burger",
        {
          rotate: 0,
          x: -20,
          scale: 1,
        },
        {
          rotate: 380,
          x: 20,
          y: 80,
          scale: 1.4,
          ease: "out-in",
        }
      );
      // parad
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#projs",
          start: "top",
          end: "bottom",
        },
      });
      tl3.fromTo(
        ".para",
        { opacity: 0, duration: 0.5, x: 0 },
        { opacity: 1, duration: 0.5, x: -20 },
        "<"
      );
    },
  },
  mounted() {
    this.loadIt();
  },
};
</script>

<style lang="less" scoped>
section {
  position: relative;
  padding: 1rem;

  .btn {
    width: 4rem;
  }

  .burger {
    position: absolute;
    max-width: 180px;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
  }
  img {
    width: 100%;
  }
}

.items {
  position: relative;
  // flex: 0 1 340px;
  margin: 1rem;
  margin-top: 2rem;

  h3 {
    margin: 0.5rem 0;
    padding: 0.5rem;
    color: rgb(255, 255, 255);
    display: inline-block;
    background-color: rgb(41, 41, 41);
    box-shadow: 3px 3px 0 rgb(253, 206, 31);
    font-weight: 400;
  }

  .details-show {
    position: relative;
    width: 100%;
    overflow: hidden;

    img {
      max-width: 400px;
      width: 100%;
      border-radius: 5px;
      box-shadow: 8px 8px 0 rgb(253, 206, 31);
    }
  }

  .para {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 1;
    width: 140px;

    background-color: #fffad5;
    padding: 0.5rem;
    border: 4px solid rgb(243, 175, 27);
    margin-top: 5px;
    h4 {
      text-decoration: underline;
    }
    span {
      font-size: 12px;
      font-weight: bold;
      color: #664707;
      word-break: break-all;
    }
    p {
      padding: 0.3rem 0;
      color: rgb(58, 53, 53);
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 450px) {
  .container .works {
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    margin: 0 auto;
    margin-top: 1rem;

    .para {
      display: none;
    }
  }
}
</style>
