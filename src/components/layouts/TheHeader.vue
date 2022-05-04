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
          <a href="#contact"><base-button>CONTACT</base-button></a>
        </li>
        <li>
          <a href="https://www.niqks.tk/" target="_blank"
            ><base-button>BLOG</base-button></a
          >
        </li>
        <li>
          <a href="#work"><base-button>WORKS</base-button></a>
        </li>
        <li>
          <a href="javacript:;"><base-button>ABOUT</base-button></a>
        </li>
      </ul>
      <div class="stack">
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
  width: 40px;
  height: 40px;
  float: left;
  margin: 14px 25px;
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
  padding: 1rem;
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
  /* background-color: #fff; */
  padding: 0.1rem 0.2rem;
  border-radius: 4px;
}

.menu .stack-menu li:active {
  border-bottom: 1px solid darkred;
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
</style>
