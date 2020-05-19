<template>
    <div>
        <router-link :to="{name:'cart', params:{cart_data:CART}}">
            <div class="Catalog__link_to_cart">
                Корзина | {{CART.length}}
            </div>
        </router-link>
        <router-link :to="{name:'catalog'}">
            <div class="link_to_catalog">
                В каталог
            </div>
        </router-link>
        <h1>Данные о товаре: {{$route.params.name}}</h1>
<!--        <ul>-->
<!--           <li>Название: {{$route.params.name}}</li>-->
<!--            <li>Размер: {{$route.params.size}}</li>-->
<!--            <li>Цвет:{{$route.params.color}}</li>-->
<!--            <li>Категория: {{$route.params.categoty}}</li>-->
<!--            <li>Артикул: {{$route.params.article}}</li>-->
<!--            <li>Цена: {{$route.params.price}}</li>-->

<!--        </ul>-->
        <div v-html="details"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ItemDetails",
        data: function(){
            return {
                details:null
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        created: function () {
            let itemDetailsData = this.$store.getters.getToDetails(this.$route.params.name);


                console.log(itemDetailsData);
            }

        }

</script>

<style>

    .link_to_catalog {
        position: absolute;
        top: 10px;
        right: 150px;
        padding: 16px;
        border: 1px solid black;
        background-color: seagreen;
        color: black;
    }

</style>