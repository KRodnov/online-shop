<template>
    <div class="Catalog">

        <Item />
    </div>

</template>

<script>

    import Item from "./Item";
    export default {
        name: "Catalog",
        components: {
            Item:Item,
        },
        props:{},
        data () {
            return {
                products: [
                    {
                        image: "1.jpg",
                        name: "T-shirt 1",
                        price: 100,
                        size: "M",
                        article: "T1",
                        available: true,
                        category: "Мужские"
                    },
                    {
                        image: "2.jpg",
                        name: "T-shirt 2",
                        price: 150,
                        size: "M",
                        article: "T2",
                        available: true,
                        category: "Женские"
                    },
                    {
                        image: "3.jpg",
                        name: "T-shirt 3",
                        price: 150,
                        size: "S",
                        article: "T3",
                        available: false,
                        category: "Женские"
                    },
                    {
                        image: "4.jpg",
                        name: "T-shirt 4",
                        price: 200,
                        size: "L",
                        article: "T4",
                        available: true,
                        category: "Мужские"
                    },
                    {
                        image: "5.jpg",
                        name: "T-shirt 5",
                        price: 100,
                        size: "M",
                        article: "T5",
                        available: false,
                        category: "Женские"
                    },
                    {
                        image: "6.jpeg",
                        name: "T-shirt 6",
                        price: 150,
                        size: "S",
                        article: "T6",
                        available: true,
                        category: "Женские"
                    }
                ]}

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