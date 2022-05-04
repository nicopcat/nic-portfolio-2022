<template>
  <base-wrapper>
    <section class="container">
      <div class="contact-title">
        <base-button class="btn" id="contact">CONTACT</base-button>
      </div>
      <div class="contact-main">
        <div class="my-contact">
          <form>
            <input type="text" placeholder="Your Name" v-model="userName" />
            <input type="email" placeholder="Your Email" v-model="userEmail" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Hi! Leave a message here.."
              v-model="msg"
            ></textarea>
            <base-button @submit.prevent="submitMsg" class="btn"
              >Submit</base-button
            >
          </form>
        </div>
        <div class="my-pic">
          <img src="./../.././assets/mie-01.jpg" alt="" />
        </div>
      </div>
    </section>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      msg: "",
    };
  },
  methods: {
    submitMsg() {
      console.log(`${this.userName} write to me: ${this.msg}`);
      console.log(this.userEmail);
    },
  },
};
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

.contact-main .my-contact {
  width: 55%;
}

.contact-main .my-contact input,
textarea {
  width: 90%;
  font-family: monospace;
  margin: 5px 0;
  padding: 5px;
  border: none;
  border-radius: 5px;
  /* box-shadow: 3px 3px 0 rgb(243, 175, 27); */
}

.contact-main .my-pic {
  padding: 5px;
  width: 35%;
  height: 120px;
}
.contact-main .my-pic img {
  height: 100%;
  border-radius: 6px;
}

.btn {
  font-size: 1em;
  width: 55px;
  height: 16px;
}

.my-contact .btn:hover {
  color: white;
  background-color: royalblue;
  cursor: pointer;
}

@media screen and (max-width: 450px) {
  .contact-main {
    width: 120%;
  }
}
</style>
