<template>
    <div Cart_item>
        <img class="Cart_item__image" v-bind:src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="Cart_item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="Cart_item__quantity">
            <p>Количество:</p>
            {{cart_item_data.quantity}}
        </div>
        <button v-on:click="deleteFromCart">Удалить из корзины</button>
    </div>
</template>

<script>
    export default {
        name: "Cart-item",
        props: {
            cart_item_data: {
            type:Object,
             default() {
                return {}
             }
            }
        },
        data() {
            return {}
        },
        computed: {},

        methods: {
            deleteFromCart () {
                this.$emit('deleteFromCart')
            }
        },
        mounted() {
            this.$set(this.cart_item_data, 'quantity',1)
        }
    }
</script>

<style lang="scss">
.Cart_item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    /*align-items: center;*/
    box-shadow: 0 0 8px 0 #c0c0c0;
    padding: $padding*2;
    margin-bottom: $margin*2;

    &__image {
        width: 200px;
    }
}


</style>