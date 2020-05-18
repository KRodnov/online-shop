<template>
    <div class="Cart">
        <h1>Корзина</h1>
        <Cart_item
        v-for="(items, index) in cart_data"
        :key="items.article"
        :cart_item_data="items"
        @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import Cart_item  from './Cart_item'
    import {mapActions} from 'vuex'

    export default {
        name: "Cart",
        components: {
           Cart_item:Cart_item,
        },
        props:{
            cart_data:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            ...mapActions ([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index){
               this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style scoped>

</style>