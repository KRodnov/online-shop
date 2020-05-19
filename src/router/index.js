import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../components/Cart.vue'
import Catalog from '../components/Catalog.vue'



Vue.use(VueRouter);

const routes = [
    { path: '/', name:'catalog', component: Catalog},
    {path:'/Cart', name:'cart', component: Cart, props: true}
];

const router = new VueRouter({
    routes:routes
});




export default router;