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
            <audio controls :src="item.song_url"></audio>
            <p>
              <strong>{{ item.song_title }}</strong> - {{ item.song_by }}
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
        Someday: {
          song_title: "某天",
          song_by: "Sam Wilkes & Jacob Mann",
          song_img: "https://nic-gz-1308403500.file.myqcloud.com/cover/Perform%20the%20Compositions%20of%20Sam%20Wilkes%20%26%20Jacob%20Mann.jpg",
          song_url: "https://nic-gz-1308403500.file.myqcloud.com/music/Someday.mp3",
        },
        Siri: {
          song_title: "Siri, 我怎么知道我有承诺恐惧症?",
          song_by: "Sam Wilkes & Jacob Mann",
          song_img: "https://nic-gz-1308403500.file.myqcloud.com/cover/Perform%20the%20Compositions%20of%20Sam%20Wilkes%20%26%20Jacob%20Mann.jpg",
          song_url: "https://nic-gz-1308403500.file.myqcloud.com/music/Siri%2C%20How%20Do%20I%20Know%20If%20I%20Have%20Commitment%20Issues.mp3",
        },
        BOA: {
          song_title: "美国银行",
          song_by: "Sam Wilkes",
          song_img: "https://nic-gz-1308403500.file.myqcloud.com/cover/Music%20for%20Saxofone%20and%20Bass%20Guitar.jpg",
          song_url:
            "https://nic-gz-1308403500.file.myqcloud.com/music/BOA.mp3",
        },
        I_Sing_High: {
          song_title: "我唱高了",
          song_by: "Sam Wilkes",
          song_img: "https://nic-gz-1308403500.file.myqcloud.com/cover/Music%20for%20Saxofone%20and%20Bass%20Guitar%20More%20Songs.jpg",
          song_url:
            "https://nic-gz-1308403500.file.myqcloud.com/music/I%20Sing%20High.mp3",
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
    min-height: 80px;
    overflow: hidden;
    border-right: 1px solid rgb(240, 240, 240);

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
      color: rgb(70, 70, 70);
      font-size: 14px;
      margin: 0.5rem 0 0 1rem;
    }
  }
}

@media screen and (max-width: 550px) {
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
        line-height: 15px;
        font-size: 14px;
        // margin: 0 0.5rem;
      }
    }
  }
}
</style>