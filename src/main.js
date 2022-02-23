import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import VueMq from 'vue-mq'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    xs: 400,
    sm: 600,
    md: 900,
    lg: Infinity,
  }
})

library.add(faHatWizard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')

