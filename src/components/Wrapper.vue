<template>
    <div class="Wrapper">
        <h1>Каталог</h1>
        <Catalog />
        <Cart />
    </div>
</template>

<script>

    import Catalog from "./Catalog";
    import Cart from "./Cart";

    export default {
    name:'Wrapper',
        components: {Cart, Catalog},
        component: {
        Catalog:Catalog,
        Cart:Cart,
    },
    props:{},
    data() {
        return {
            title:'Wrapper'
        }
    },
    computed: {

    },
    // methods: {},
    watch:{},


    }
</script>

<style scoped>
.Wrapper {

    max-width: 900px;
    margin: 0 auto;
}
</style>