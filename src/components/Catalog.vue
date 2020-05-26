<template>
    <div class="image-container">
        <img src="https://atrium-volsk.ru/media/k2/items/cache/daf30d03da42a5291604b3fcca07f0d0_XL.jpg"
             alt="Картинка" style="width: 800px; height: 300px">
    <div class="Catalog">
        <router-link :to="{name:'cart', params:{cart_data:CART}}">
            <div class="Catalog__link_to_cart">
                Корзина | {{CART.length}}
            </div>
        </router-link>
        <Item
                v-for="product in this.$store.state.products"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
        />
    </div>
    </div>

</template>

<script>

    import Item from "./Item";
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Catalog",
        components: {
            Item: Item,
        },
        props: {},
        data() {
            return {}

        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'ADD_TO_CART'
            ]),

            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },



    }
</script>

<style lang="scss">
    .Catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    .Catalog__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: $padding*2;
        border: 1px solid black;
        background-color: seagreen;
        color: black;
    }

</style>