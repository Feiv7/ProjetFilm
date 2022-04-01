/* 
	[IMPOTRS] Vue.js
	Define main imports to create the application router
*/
import Vue from 'vue'; // Open Source do it better => https://vuejs.org
import VueRouter from 'vue-router';  // Path binding => https://router.vuejs.org
/* 
[ROUTER] Vue.js Path
Define a constant with all needed application paths
=> https://router.vuejs.org

*/
const routerPath = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/film/:uuid',
        name: 'FilmView',
        component: () => import('../views/FilmView.vue'),
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: () => import('../views/RegisterView.vue'),
    },
];
//

/* 
[ROUTER] Vue.js router configuration
Create new router and add navigation guards to
include OpenAPI in the router description
*/
/* 
    [VUE] Instantiate Router
    Create router with needed properties => https://router.vuejs.org
*/
    let AppRouter = new VueRouter({
        mode: 'history',
        routes: routerPath
    });

    AppRouter.beforeEach(async(to, from, next) => {
        return next();
    });
//
//

/* 
[EXPORT] Vue Router
Set Vue Router in Vue.js and export it
*/
Vue.use(VueRouter); // Add Vue Router in the application
export default AppRouter; // Export router
//
