import Vue from 'vue'
import App from './App.vue'
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
