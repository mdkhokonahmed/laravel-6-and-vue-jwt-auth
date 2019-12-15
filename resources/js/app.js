require('./bootstrap');
import Vue from 'vue'
//import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// Vuex Support 
import Vuex from 'vuex'
Vue.use(Vuex)

import VueAWN from "vue-awesome-notifications"
let options = {
	position : "top-right",
}
Vue.use(VueAWN, options)

import Backstore from './stores/backstore'
const store = new Vuex.Store({
  modules: {
    backstore: Backstore,
    // frontstore: Frontstore,
    // backstore: Backstore,
   
  }
})





//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import AppComponent from './components/AppComponent'

import router from './routes.js';
const app = new Vue({
	components: { AppComponent },
    router,
    store
}).$mount('#app')
