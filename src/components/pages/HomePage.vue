<template>
  <base-wrapper>
    <section class="container">
      <base-button class="btn"> About Me </base-button>
      <div class="info-box">
        <div class="pic">
          <img src="./../.././assets/pic-01.jpg" alt="" />
        </div>
        <div class="info">
          <h3>Hi, I'm Nicole</h3>
          <p>C:\WINDOWS\User\Nicole</p>

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
export default {};
</script>

<style lang="less" scoped>
section {
  padding: 1rem;
  .btn {
    width: 4rem;
  }
}

.container {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  margin-bottom: 2rem;
  /* background-color: rgb(60, 99, 167); */
}

.about-title {
  border-bottom: 5px dashed black;
  margin-left: 10%;
  width: 45vw;

  height: 50px;
  margin-top: 2rem;
  text-align: center;
}

.about-title .btn {
  width: 75px;
}

.info-box {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  margin-left: 10%;
}

.info-box .pic img {
  margin-top: 1rem;
  width: 100px;
  box-shadow: 3px 3px 0 rgb(125, 148, 219);
}
.info-box .info {
  max-width: 350px;
  max-height: 260px;
  width: 70%;
  margin: 3rem;
  background-color: black;
}

.info-box .info h3 {
  margin: 0;
  padding: 0.5rem;
  font-family: monospace;
  font-size: 15px;
  background-color: #fdce1f;
  box-shadow: 3px 3px 0 royalblue;
  border-top: 2px solid white;
  border-left: 2px solid white;
}

.info-box .info p {
  padding: 0.4rem 0.5rem;
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
