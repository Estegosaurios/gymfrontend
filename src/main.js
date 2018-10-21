import Vue from 'vue';
import router from 'router/router';
import store from 'store/store';
import App from '@/App.vue';
import '@/core/_globals';
import '@/styles/main.scss';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js');
}