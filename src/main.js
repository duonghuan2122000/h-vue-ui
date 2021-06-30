import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import fontawesome
import '@/assets/fontawesome/css/fontawesome.min.css';
import '@/assets/fontawesome/css/solid.min.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
