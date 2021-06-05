import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueYoutube from 'vue-youtube'
import * as Contentful from 'contentful'
import VueContentfulApi from 'vue-contentful-api'
import router from "./router";

Vue.config.productionTip = false

let contentful = Contentful.createClient({
  space: 'txhxwqia2lo4',
  accessToken: 'eB1d6i1VAbJllTZEjHC_GWhmRxFmsUbiB2434-I3zVQ',
})

Vue.use(VueYoutube);
Vue.use(
  router
);
Vue.use(VueContentfulApi, contentful);

new Vue({
  created() {
    AOS.init({
      once: true
    })
  },
  render: h => h(App),
  router
}).$mount('#app')
