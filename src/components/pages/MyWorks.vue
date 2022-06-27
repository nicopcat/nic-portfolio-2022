<template>
  <base-wrapper>
    <section class="container">
      <div class="works-title">
        <base-button class="btn"> My Works </base-button>
      </div>
      <div class="works">
        <div class="items">
          <h3>Dodo</h3>
          <div class="details">
            <div class="details-show">
              <a href="https://just-dodo.netlify.app/" target="_blank"
                ><img src="./../.././assets/dodo-screentshot.png"
              /></a>
            </div>
            <div class="para">
              <h4>Stacks</h4>
              <p>HTML, CSS, JavaScript, Vue-cli, Vue(vuex)</p>
              <p>Reconstruct this app from jQuery version with Vue.js</p>
            </div>
          </div>
        </div>
        <div class="items">
          <h3>Find a Coach</h3>
          <div class="details">
            <div class="details-show">
              <a
                href="https://find-a-coach-or-become-one.netlify.app/"
                target="_blank"
                ><img src="./../.././assets/coach-screenshot.png" alt=""
              /></a>
            </div>
            <div class="para">
              <h4>Stacks</h4>
              <p>HTML, CSS, JavaScript, Vue-cli, Vue(Vuex, Vue Router)</p>
            </div>
          </div>
        </div>
        <div class="items">
          <h3>weather</h3>
          <div class="details">
            <div class="details-show">
              <a href="https://weather-app-page.vercel.app/" target="_blank"
                ><img src="./../.././assets/weather-screenshot.png"
              /></a>
            </div>
            <div class="para">
              <h4>Stacks</h4>
              <p>HTML, CSS, JavaScript, Vue-cli, Vue.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </base-wrapper>
</template>

<script>
export default {};
</script>

BaseButton
<style lang="less" scoped>
section {
  padding: 1rem;

  .btn {
    width: 4rem;
  }
}

.container .works {
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;

  h3 {
    margin: 0.5rem 0;
    padding: 0.5rem;
    color: aliceblue;
    max-width: 120px;
    background-color: rgb(0, 0, 0);
    box-shadow: 3px 3px 0 rgb(253, 206, 31);
    font-weight: 400;
  }

  img {
    max-width: 100%;
    box-shadow: 8px 8px 0 rgb(253, 206, 31);
  }
}

.container .works .items {
  flex: 0 1 340px;
  margin: 1rem;
  margin-top: 1.8rem;
}

.details-show {
  width: 100%;
  overflow: hidden;
}

.para {
  background-color: #fffad5;
  padding: 0.5rem;
  border: 4px solid rgb(243, 175, 27);
  margin-top: 5px;
}
.para h4 {
  text-decoration: underline;
}
.para p {
  padding: 0.3rem 0;
  color: rgb(58, 53, 53);
  font-size: 14px;
}

@media screen and (max-width: 450px) {
  .container .works {
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    margin: 0 auto;
    margin-top: 1rem;
  }
}
</style>
