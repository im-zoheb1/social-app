import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueChatScroll from "vue-chat-scroll";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";

Vue.use(VueChatScroll);

Vue.prototype.$slider = noUiSlider;
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
