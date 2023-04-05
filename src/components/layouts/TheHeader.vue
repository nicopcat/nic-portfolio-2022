<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/">
        <img src="https://nic-gz-1308403500.file.myqcloud.com/other/TheHeader-2022-07-21-20-35-11.png" />
        <span>Nekolas</span>
      </a>
    </div>
    <div class="menu">
      <ul class="list-menu">
        <li>
          <a href="https://nicopcat.github.io/" target="_blank">
            <base-button>Blog
              <svg aria-hidden="true" class="icon-arrow">
                <use xlink:href="#social-icon-jiantou_youshang"></use>
              </svg>
            </base-button>
          </a>
        </li>
        <li>
          <a href="#contact"><base-button>Contact</base-button></a>
        </li>
        <li>
          <a href="#projs"><base-button>Projects</base-button></a>
        </li>
        <li>
          <a href="#music"><base-button>Music</base-button></a>
        </li>
      </ul>
      <div class="stack">
        <base-button :class="{ sandwich_open: tabOpen, sandwich_close: !tabOpen, sandwich: true }"
          @click="tabOpen = !tabOpen">≡</base-button>
        <div class="stack-menu" v-show="tabOpen">
          <div class="items">
            <a href="#projs" @click="tabOpen = false">Works</a>
          </div>
          <div class="items">
            <a href="#music" @click="tabOpen = false">Music</a>
          </div>
          <div class="items">
            <a href="#contact" @click="tabOpen = false">Contact</a>
          </div>
          <div class="items">
            <a href="https://nicopcat.github.io/" target="_blank">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tabOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.tabOpen = !this.tabOpen;
    },
  },
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
  color: bisque;
}

.navbar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(255, 250, 213);
  z-index: 999;

  .logo {
    width: 25px;
    height: 25x;
    float: left;
    margin: auto 1rem;

    a {
      display: flex;
      align-items: flex-end;
      text-decoration: none;

      img {
        border-radius: 4px;
        width: 35px;
        border-radius: 20px;
        display: inline-block;
      }

      span {
        font-family: "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-weight: 600;
        margin-left: 0.5rem;
        min-width: 150px;
        font-size: 18px;
        color: #383838;
      }
    }
  }



  .menu {
    .list-menu li {
      float: right;
      padding: 0.5rem;

      .icon-arrow {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }

      a div:hover {
        cursor: pointer;
      }
    }

    a {
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }

    .stack {
      display: none;
    }
  }
}




@media screen and (max-width: 450px) {
  .menu {

    .list-menu {
      display: none;
    }

    .stack {
      display: flex !important;
      flex-flow: column nowrap;
      justify-content: end;
      align-items: end;
      margin: .3rem 1rem;

      .sandwich {
        margin: 4px 0;
        padding: 5px;
        width: 20px;
        color: #fdce1f !important;
        background-color: white !important;
        text-align: center;
      }

      .sandwich_open {
        color: white !important;
        background-color: #fdce1f !important;
      }

      .sandwich_close {
        color: #fdce1f !important;
        background-color: white !important;
      }

      .stack-menu {
        margin-right: 1rem;

        .items {
          width: 40px;
          height: auto;
          cursor: pointer;
          border-bottom: 2px solid #fff0bc;
          padding: 0.1rem 0.2rem;
        }
      }

    }
  }

}
</style>
