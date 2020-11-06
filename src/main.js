import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/css/components/index.scss";
import "@/css/spacing/index.scss";
import "@/css/theme/index.scss";
import "@/css/typography/index.scss";

//import "@/css/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
