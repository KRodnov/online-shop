import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../components/Cart.vue'
import Catalog from '../components/Catalog.vue'
import loadingSection from '../components/loadingSection'
import ItemDetails from '../components/ItemDetails'



Vue.use(VueRouter);

const routes = [
    { path: '/', name:'loadingSection', component: loadingSection},
    { path: '/Catalog', name:'catalog', component: Catalog},
    { path: '/Item/:name', name:'itemDetails', component: ItemDetails},
    {path:'/Cart', name:'cart', component: Cart, props: true}
];

const router = new VueRouter({
    routes:routes
});




export default router;