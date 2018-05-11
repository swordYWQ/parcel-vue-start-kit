import Vue from 'vue';
import router from './router.js'
import App from './app.vue';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// new Vue(Vue.util.extend({ router }, App)).$mount('#app');

if (module.hot) {
  module.hot.accept();
}