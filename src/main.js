import Vue from 'vue'
import App from './App.vue'
import VueTippy, { TippyComponent } from "vue-tippy";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faCloudShowersHeavy, faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

library.add(faMusic)
library.add(faCloudShowersHeavy)
library.add(faFireAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
