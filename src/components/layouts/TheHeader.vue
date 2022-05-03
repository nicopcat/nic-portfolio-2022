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
          <base-button><a href="#contact">CONTACT</a></base-button>
        </li>
        <li>
          <base-button
            ><a href="https://www.niqks.tk/" target="_blank"
              >BLOG</a
            ></base-button
          >
        </li>
        <li>
          <base-button><a href="#work">WORKS</a></base-button>
        </li>
        <li>
          <base-button><a href="/">ABOUT</a></base-button>
        </li>
      </ul>
      <ol>
        <base-button class="sandwich" @click="openMenu">≡</base-button>
        <ul class="stack-menu" v-if="tabOpen">
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="https://www.niqks.tk/" target="_blank">BLOG</a>
          </li>
          <li>
            <a href="#work">WORKS</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
        </ul>
      </ol>
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

<style scoped>
li {
  list-style: none;
  color: bisque;
}
.navbar {
  /* position: fixed; */
  width: 100%;
  height: 60px;
  background-color: rgb(255, 250, 213);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.logo {
  width: 35px;
  height: 35px;
  float: left;
  margin: 12px 25px;
}

.logo img {
  border-radius: 4px;
}
.menu {
  float: right;
}

.sandwich {
  display: none;
  padding: 5px 5px;
  text-align: center;
  color: #fdce1f;
}

.sandwich:hover {
  background-color: #fdcd1f7e;
  color: white;
  cursor: pointer;
  margin: 0;
}

.menu ul li {
  float: right;
  padding: 0.8em 1em;
}

.menu a {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.menu .stack-menu {
  width: 40px;
  height: auto;
}
.menu .stack-menu li {
  display: none;
  margin: 0;
  padding: 0;
}
.menu .stack-menu li:hover {
  background-color: #fff;
  border-radius: 4px;
  padding: 2px;
}

@media screen and (max-width: 450px) {
  .menu .list-menu {
    display: none;
  }
  .sandwich {
    margin: 0;
    width: 20px;
    display: block;
  }
  .menu .stack-menu li {
    display: block;
  }
}
</style>
