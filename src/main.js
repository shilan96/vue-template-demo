import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import routes from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(VueRouter);
Vue.use(Antd);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
