<template>
  <base-wrapper>
    <section class="container">
      <div class="contact-title">
        <base-button class="btn" id="contact">CONTACT</base-button>
      </div>
      <div class="contact-main">
        <div class="contact">
          <h2>Feel interested?</h2>
          <p>Contact me soon.</p>
          <div class="social-link">
            <a
              target="_blank"
              href="https://github.com/nicopcat"
              title="github.com/nicopcat"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-github1"></use>
              </svg>
            </a>
            <a
              target="_blank"
              href="mailto:tianfang07@outlook.com"
              title="tianfang07@outlook.com"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-email"></use>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/niqks07/"
              title="instagram.com/niqks07/"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-instagram-fill"></use>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/nicoletian07/"
              title="facebook.com/nicoletian07/"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-facebook-fill"></use>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.douban.com/people/ph1lia/"
              title="(deprecated)"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-snssharedoubanon"></use>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://weibo.com/u/1751799503"
              title="笠原喂鴨"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-weibo1"></use>
              </svg>
            </a>

            <a
              target="_blank"
              href="https://steamcommunity.com/id/nicoverdes/"
              title="nicoverdes"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-steam1"></use>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.last.fm/zh/user/fanntamy"
              title="last.fm/zh/user/fanntamy"
            >
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#social-icon-lastfm1"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="my-pic">
          <img src="./../.././assets/mie-01.jpg" alt="" />
        </div>
      </div>
    </section>
  </base-wrapper>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding-bottom: 1rem;
}

.container .contact-title {
  border-bottom: 5px dashed black;
  margin-left: 10%;
  width: 45vw;
  height: 50px;
  margin-top: 1rem;
  text-align: center;
}

.container .contact-title .btn {
  width: 75px;
}

.contact-main {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  /* width: 430px; */
  width: 70%;

  margin-left: 10%;
  margin-top: 1rem;
  /* background-color: royalblue; */
}

.contact-main .contact {
  width: 55%;
}

.contact-main .contact .social-link {
  max-width: 180px;
  padding: 1rem 0;
}

.contact-main .contact .social-link a svg {
  margin-right: 0.3em;
  margin-top: 0.3em;
}

.contact-main .contact .social-link a svg:hover {
  transform: scale(1.2);
  transition: 0.35s ease;
}

.contact-main .my-pic {
  margin-top: 0.4rem;
  width: 35%;
  height: 120px;
}
.contact-main .my-pic img {
  height: 100%;
  border-radius: 6px;
}

@media screen and (max-width: 450px) {
  .contact-main {
    width: 120%;
  }
}
</style>
