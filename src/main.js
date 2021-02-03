import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueSmoothScroll from "vue2-smooth-scroll";
import VueYoutube from 'vue-youtube'
import router from "./router";

Vue.config.productionTip = false
Vue.use(VueYoutube);
Vue.use(VueSmoothScroll);
Vue.use(
  router
);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
