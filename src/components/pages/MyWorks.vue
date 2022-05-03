<template>
  <base-wrapper>
    <section class="container">
      <div class="works-title">
        <base-button class="btn" id="work">WORKS</base-button>
      </div>
      <div class="works">
        <div class="dodo">
          <h4>Dodo</h4>
          <div class="dodo-details">
            <div class="dodo-details-show">
              <a href="https://www.niqks.tk/dodo-v2/"
                ><img src="./../.././assets/dodo-1.png" target="_blank"
              /></a>
            </div>
            <div class="para">
              <h5>Stacks</h5>
              <p>HTML, CSS, JavaScript, Vue(vuex)</p>
            </div>
          </div>
        </div>
        <div class="coach">
          <h4>Find a Coach</h4>
          <div class="coach-details">
            <div class="coach-details-show">
              <a
                href="https://find-a-coach-or-become-one.netlify.app/"
                target="_blank"
                ><img src="./../.././assets/coach-1.png" alt=""
              /></a>
            </div>
            <div class="para">
              <h5>Stacks</h5>
              <p>HTML, CSS, JavaScript, Vue(Vuex, Vue Router)</p>
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
<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin-bottom: 2rem;
}
.container .works-title {
  border-bottom: 5px dashed black;
  margin-left: 10%;
  width: 45vw;
  height: 50px;
  margin-top: 2rem;
  text-align: center;
}

.container .works-title .btn {
  width: 75px;
}

.container .works {
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  margin-left: 10%;
  margin-top: 1rem;
}

.works h4 {
  margin: 0.5rem 0;
  padding: 0.3rem;
  color: aliceblue;
  max-width: 120px;
  background-color: rgb(0, 0, 0);
  box-shadow: 3px 3px 0 rgb(243, 175, 27);
  font-weight: 400;
}

.works img {
  margin: auto;
  max-width: 99%;
  box-shadow: 8px 8px 0 rgb(243, 175, 27);
}

.works .coach,
.works .dodo {
  margin-top: 1rem;
  width: 370px;
}

.dodo-details-show,
.coach-details-show {
  width: 100%;
  overflow: hidden;
}

.para {
  background-color: #fff;
  padding: 0.5rem;
  border: 4px solid rgb(243, 175, 27);
  margin-top: 5px;
}
.para h5 {
  text-decoration: underline;
}
.para p {
  padding: 0.3rem 0;
  font-size: 14px;
}
</style>
