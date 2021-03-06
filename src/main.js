import Vue from "vue";
import App from "./App.vue";
import VueAgile from "vue-agile";

import VueSmoothScroll from "vue2-smooth-scroll";



Vue.use(VueAgile);
Vue.use(VueSmoothScroll, {
  duration: 800,
  updateHistory: false,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
