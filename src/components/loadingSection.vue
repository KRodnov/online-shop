<template>
    <div>
        <h1>Идет загрузка...</h1>
        <img src="https://i.gifer.com/7plQ.gif" alt="загрузка" style="width: 500px;">
    </div>
</template>

<script>
    export default {
        name: "loadingSection",
        data: function() {
            return  {
                products: [
                    {
                        image: "1.jpg",
                        name: "Bag 1",
                        price: 3500,
                        size: "L",
                        color: "Серый",
                        article: "B1",
                        category: "Женские"
                    },
                    {
                        image: "2.jpg",
                        name: "Bag 2",
                        price: 2700,
                        size: "L",
                        color: "Черный",
                        article: "B2",
                        category: "Женские"
                    },
                    {
                        image: "3.jpg",
                        name: "Bag 3",
                        price: 1600,
                        size: "M",
                        color: "Коричневый",
                        article: "B3",
                        category: "Мужские"
                    },
                    {
                        image: "4.jpg",
                        name: "Bag 4",
                        price: 1000,
                        size: "S",
                        color: "Черный",
                        article: "B4",
                        category: "Мужские"
                    },
                    {
                        image: "5.jpg",
                        name: "Bag 5",
                        price: 2000,
                        size: "L",
                        color: "Серый",
                        article: "B5",
                        category: "Мужские"
                    },
                    {
                        image: "6.jpg",
                        name: "Bag 6",
                        price: 2300,
                        size: "L",
                        color: "Черный",
                        article: "B6",
                        category: "Мужские"
                    },
                    {
                        image: "7.jpg",
                        name: "Bag 7",
                        price: 2000,
                        size: "L",
                        color: "Черный",
                        article: "B7",
                        category: "Мужские"
                    },
                    {
                        image: "8.jpg",
                        name: "Bag 8",
                        price: 2400,
                        size: "L",
                        color: "Черный",
                        article: "B8",
                        category: "Женские"
                    },
                    {
                        image: "9.jpg",
                        name: "Bag 9",
                        price: 2700,
                        size: "L",
                        color: "Серый",
                        article: "B9",
                        category: "Женские"
                    },
                    {
                        image: "10.jpg",
                        name: "Bag 10",
                        price: 1600,
                        size: "S",
                        color: "Красный",
                        article: "B10",
                        category: "Женские"
                    }
                ]
            }
        },
        mounted: function () {
            this.$store.commit('SET_PRODUCTS_TO_STATE',this.products);
            setTimeout(this.loadingComplete, 5000)
        },


        methods:{
            loadingComplete: function () {
                this.$router.push({path: 'Catalog'})
            }
        }
    }
</script>

<style scoped>

</style>