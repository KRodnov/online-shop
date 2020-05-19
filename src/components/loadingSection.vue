<template>
    <div>
        <h1>Идет загрузка...</h1>
        <img src="https://i.gifer.com/7plQ.gif" alt="загрузка" style="width: 500px;">
    </div>
</template>

<script>
    export default {
        name: "loadingSection",
        mounted: function () {
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