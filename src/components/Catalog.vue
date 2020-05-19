<template>
    <div class="Catalog">
        <router-link :to="{name:'cart', params:{cart_data:CART}}">
            <div class="Catalog__link_to_cart">
                В корзине:{{CART.length}}
            </div>
        </router-link>
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
    import {mapActions, mapGetters} from 'vuex'
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
        computed :{
            ...mapGetters([
                'PRODUCTS',
                    'CART'
                ]),
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
            this.GET_PRODUCTS_FROM_API();
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
    .Catalog__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: $padding*2;
        border: 1px solid black;
    }

</style>