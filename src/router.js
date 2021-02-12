import Vue from 'vue';
import Router from 'vue-router';
import { routes } from "@/routes";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to){
      if(to.hash){
        if(to.hash==="#projects-container"){
          return {
            selector: to.hash,
            offset: { x: 0, y: -200 },
            behavior: 'smooth'
        }
      }

      return {
        selector: to.hash,
        offset: { x: 0, y: 120 },
        behavior: 'smooth'
    } 
  }
}

  })


  export default router;