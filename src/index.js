import style from './style.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue'
//import Home from '.pages/Home.vue'

/*
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
*/

new Vue({
  el: '#app',
  //router,
  render(createEl) {
    return createEl(App)
  }
});
