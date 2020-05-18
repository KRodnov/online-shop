<template>
    <div class="Catalog">

        <Item
        v-for="product in this.$store.state.products"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart= "addToCart"

        />
    </div>

</template>

<script>

    import Item from "./Item";
    import {mapActions} from 'vuex'
    export default {
        name: "Catalog",
        components: {
            Item:Item,
        },
        props:{},
        data () {
            return {


                }

        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart (data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted()  {
            this.GET_PRODUCTS_FROM_API()
        }


    }
</script>

<style lang="scss">
.Catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

</style>