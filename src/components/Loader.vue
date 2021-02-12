<template>
    <div>
        <img class="loader" src="../assets/img/icons/spinning-circles.svg">
    </div>
</template>

<script>

export default {
    name: 'Loader',
    props: {
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.loader{
    width:5rem;
    height:auto;
}
</style>