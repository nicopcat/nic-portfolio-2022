<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/">
        <img src="./../.././assets/tomato-avatar.png" style="width: 35px" />
      </a>
    </div>
    <div class="menu">
      <ul class="list-menu">
        <li>
          <a href="https://blog.nekolas.cafe/" target="_blank">
            <base-button
              >Blog
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
          <a href="#works"><base-button>Works</base-button></a>
        </li>
        <li>
          <a href="#music"><base-button>Music</base-button></a>
        </li>
        <!-- <li>
          <a href="javacript:;"><base-button>ABOUT</base-button></a>
        </li> -->
      </ul>
      <div class="stack">
        <base-button class="sandwich" @click="openMenu">≡</base-button>
        <ul class="stack-menu" v-if="tabOpen">
          <!-- <li>
            <a href="/">ABOUT</a>
          </li> -->
          <li>
            <a href="#works" @click="tabOpen = false">Works</a>
          </li>
          <li>
            <a href="#music" @click="tabOpen = false">Music</a>
          </li>
          <li>
            <a href="#contact" @click="tabOpen = false">Contact</a>
          </li>
          <li>
            <a href="https://blog.nekolas.cafe/" target="_blank">Blog</a>
          </li>
        </ul>
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  background-color: rgb(255, 250, 213);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 999;
}
.logo {
  width: 40px;
  height: 40px;
  float: left;
  margin: 14px 20px;
}

.logo img {
  border-radius: 4px;
}

.sandwich {
  display: none;
  width: 30px;
  padding: 5px 5px;
  text-align: center;
  color: #fdce1f;
}

.sandwich:hover {
  color: white;
  cursor: pointer;
}

.menu .list-menu li {
  float: right;
  padding: 0.5rem;
  a div:hover {
    cursor: pointer;
  }
}

.menu a {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.menu .stack {
  margin: 1rem;
}

.menu .stack-menu ul {
  margin-right: 1rem;
  width: 40px;
  height: auto;
}

.menu .stack-menu li {
  padding: 0.1rem 0.2rem;
  border-radius: 4px;
}

.menu .stack-menu li {
  cursor: pointer;
  border-bottom: 2px solid #ffc801;
}

@media screen and (max-width: 450px) {
  .menu .list-menu {
    display: none;
  }
  .sandwich {
    float: right;
    margin: 4px 0;
    width: 20px;
    display: block;
  }
}

.icon-arrow {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
