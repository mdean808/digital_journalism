import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/globals.scss'
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	router,
	watch: {
		$route: (to) => {
			console.log(to);
			if (to.name === 'Home') {
				document.getElementById('nav').setAttribute('style', 'opacity: 0; position: fixed;');
			} else {
				document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
			}
		}
	},
	store,
	render: h => h(App)
}).$mount('#app');
