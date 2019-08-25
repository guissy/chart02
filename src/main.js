import Vue from 'vue/dist/vue'
import App from './App.vue'
import './css/normalize.css'
import './css/reset.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');