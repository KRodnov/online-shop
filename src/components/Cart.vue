<template>
    <div class="Cart">
        <router-link :to="{name:'catalog'}">
            <div class="Catalog__link_to_cart">
                В каталог
            </div>
        </router-link>
        <h1>Корзина</h1>
        <p v-if="!cart_data.length">В корзине нет товаров</p>
        <Cart_item
        v-for="(items, index) in cart_data"
        :key="items.article"
        :cart_item_data="items"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
        />
        <div class="Cart__total">
            <p class="total__name">Всего товаров: {{cartTotal}}</p>
            <p>На сумму: {{cartTotalCost}} &#x20bd;</p>
        </div>
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

        computed: {
            cartTotal() {
                let resultItem = [];
                if (this.cart_data.length) {
                    for (let item of this.cart_data) {
                        resultItem.push(item.quantity);
                    }
                    resultItem=resultItem.reduce( function (sum,el) {
                        return sum+el;
                    });
                    return resultItem;
                } else {
                    return 0;
                }

            },

            cartTotalCost() {
            let result = [];

            if (this.cart_data.length){
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function (sum,el) {
                    return sum+el;
                });
                return result;
            } else {
                return 0;
            }}},

        methods: {
            ...mapActions ([
                'DELETE_FROM_CART',
                'INCREMENT_CART',
                'DECREMENT_CART'
            ]),
            increment(index){
                this.INCREMENT_CART(index)
            },
            decrement(index){
                this.DECREMENT_CART(index)
            },
            deleteFromCart(index){
               this.DELETE_FROM_CART(index)
            }
        }}

</script>

<style lang="scss">
    .Cart {
        margin-bottom: 100px;
        &__total {
        position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2;
            display: flex;
            justify-content: center;
            background:seagreen;
            color:wheat ;
            font-size: 20px;
        }
        .total__name {
            margin-right: $margin*2;
        }
    }
</style>