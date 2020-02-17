import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/globals.scss'
import BootstrapVue from "bootstrap-vue";
import $ from "jquery";
import VueMarkdown from 'vue-markdown'

Vue.use(BootstrapVue);
Vue.use(VueMarkdown);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
