import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton";
import BaseWrapper from "./components/ui/BaseWrapper";
import './assets/css/global.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("base-wrapper", BaseWrapper);


app.mount("#app");
