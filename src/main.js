import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueYoutube from 'vue-youtube'
import router from "./router";

Vue.config.productionTip = false
Vue.use(VueYoutube);
Vue.use(
  router
);

new Vue({
  created() {
    AOS.init({
      once: true
    })
  },
  render: h => h(App),
  router
}).$mount('#app')
