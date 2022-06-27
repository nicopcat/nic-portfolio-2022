<template>
  <base-wrapper>
    <section>
      <base-button class="btn" id="music"> Enjoy Some Music </base-button>
      <div class="song_list" v-for="(item, i) in song_list" :key="i">
        <div class="audio_wrap">
          <div class="audio_info">
            <img :src="item.song_img" :alt="item.song_title" />
          </div>
          <div class="audio_play">
            <audio preload="auto" controls :src="item.song_url"></audio>
            <p>
              <strong>{{ item.song_title }} - {{ item.song_by }}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </base-wrapper>
</template>
<script>
export default {
  data() {
    return {
      song_list: {
        Click: {
          song_title: "Click",
          song_by: "C418",
          song_img: "./../.././assets/img/cover/Click.jpg",
          song_url:
            "https://t4.bcbits.com/stream/4600dd73d95eccc661c707fe973a2a5d/mp3-128/1847033482?p=0&ts=1656408973&t=c5ca9509641195dd4f6a53e0e2f38991dea55401&token=1656408973_dd8852fdc67a7c0c042c5362b1bd07853cb501a4",
        },
        Visit_Croatia: {
          song_title: "Visit Croatia",
          song_by: "Alabaster dePlume",
          song_img: "./../.././assets/img/cover/Visit_Croatia.jpg",
          song_url:
            "https://t4.bcbits.com/stream/f0d990afb8ac2997ecb8f59b8f5383cc/mp3-128/2935650481?p=0&ts=1656412268&t=36fd26864999930fba206be9f1159bbbef583487&token=1656412268_5a578a331b73a1aba87b7d9924ffa14348d0b915",
        },
      },
    };
  },
};
</script>
<style lang="less" scoped>
section {
  padding: 1rem;
  .btn {
    width: 4rem;
  }
}
.audio_wrap {
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: 80px;
  background-color: #fff;

  .audio_info {
    min-width: 80px;
    width: 80px;
    height: 80px;
    // background-color: royalblue;
    img {
      width: 100%;
      height: auto;
    }
  }

  .audio_play {
    width: 100%;
    height: auto;

    audio {
      margin: 0 auto;
      padding: 0 1rem;
      // width: 100%;
      height: 32px;
    }
    p {
      font-size: 14px;
      margin: 0.5rem 0 0 1rem;
    }
  }
}

@media screen and (max-width: 450px) {
  .audio_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .audio_play {
      width: 100%;
      height: 80px;

      audio {
        margin-top: 0.5rem;
        width: 85%;
        height: 30px;
      }
      p {
        line-height: 14px;
        font-size: 12px;
        // margin: 0 0.5rem;
      }
    }
  }
}
</style>