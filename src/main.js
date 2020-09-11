import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
// import store from "./store"
import "./plugins/ant-design-vue"
import "./plugins/json"
import "./plugins/localStorage"
import "./plugins/gdpr"
import "./plugins/clipboard"
import "./plugins/metaHelpers"

//Vue.config.productionTip = false;

new Vue({
  router,
//   store,
  render: h => h(App),
}).$mount("#app");
