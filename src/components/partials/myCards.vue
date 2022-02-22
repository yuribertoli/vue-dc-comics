<template>

    <div class="cards">

        <img :src="url" :alt="nome">

        <h4>{{nome}}</h4>

    </div>

</template>

<script>
export default {
    name: 'myCards',
    props: {
            "nome": String, 
            "url": String
    },
}
</script>

<style scoped lang="scss">

.cards {
    width: calc(100% / 6);
    padding: 0 10px;

    img {
        width: 100%;
        height: 65%;
        object-fit: cover;
        object-position: top;
    }

    h4 {
        color: white;
        text-transform: uppercase;
        font-size: 0.7rem;
        padding-top: 5px;
        font-weight: 400;
    }
}

</style>