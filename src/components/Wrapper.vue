<template>
    <div class="Wrapper">
        <router-view></router-view>
<!--        <h1>Каталог</h1>-->
<!--        <Catalog />-->
<!--        <Cart-->
<!--                v-if="CART.length"-->
<!--                :cart_data ='CART'-->
<!--        />-->
    </div>
</template>

<script>

    // import Catalog from "./Catalog";
    // import Cart from "./Cart";
    // import {mapGetters} from 'vuex'

    export  default {
    name:'Wrapper',
        // components: {Cart, Catalog},
        // component: {
        // Catalog:Catalog,
        // Cart:Cart,
    // },
    props:{},
    data() {
        return {
            title:'Wrapper'
        }
    },
    computed: {
        // ...mapGetters ([
        //     'CART'])
    },
    methods: {},
    watch:{},


    }
</script>

<style>
.Wrapper {

    max-width: 900px;
    margin: 0 auto;
}
</style>