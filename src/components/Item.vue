<template>
    <div class="Item">
        <img class="Item__image"
             v-bind:src="require('../assets/images/' + product_data.image)"
             alt="Image">
        <p class="Item__name">{{product_data.name}}</p>
        <p class="Item__price">Цена: {{product_data.price}}  &#x20bd;</p>
        <button
                v-on:click="addToCart"
                class="Item__add_to_cart_btn"
        >Добавить в корзину</button>
        <button v-on:click="detailsButtonClicked(product_data.name)">
            Подробнее</button>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            detailsButtonClicked (name) {
                console.log(`detailsButtonClicked: ${name}`);
                this.$router.push({name:'itemDetails', params: {name:name}});
            },
            addToCart () {
               this.$emit('addToCart',this.product_data);
            },
            mounted() {
                this.$set(this.product_data,  1)
            }
        }
    }
</script>

<style lang="scss">
.Item {
    flex-basis: content;
    box-shadow: 0 0 8px 0 #c0c0c0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    margin-top: 50px;
}
    .Item__image {
        width: 200px;
        height: 200px;
    }
</style>