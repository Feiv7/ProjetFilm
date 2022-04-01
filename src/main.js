/* 
	[VUE] Main imports
	Define main imports to create the application
*/
    // Vue imports
    import Vue from 'vue'; // Open Source do it better => https://vuejs.org

    // App imports
    import App from './App.vue'; // Main application controller
    import AppRouter from "./router"; // Path binding => https://router.vuejs.org
//


/* 
	[APP] Start Vue.js app
	Init new Vue.js applilcation
*/
    // Set configuration	
    Vue.config.productionTip = false;

    // Instantiate new Vue.js Application
    new Vue({
        router: AppRouter,
        render: create => create(App),
    })
    .$mount('#app');
//
