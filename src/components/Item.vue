<template>
    <div class="Item">
        <p>Товар 1</p>
        <p>Товар 2</p>
        <p>Товар 3</p>
        <p>Price: 100500</p>
        <button>Добавить в корзину</button>
    </div>
</template>

<script>
    export default {
        name: "Item"
    }
</script>

<style lang="scss">
.Item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #c0c0c0;
    padding: $padding*2;
    margin-bottom: $margin*2;
}
</style>