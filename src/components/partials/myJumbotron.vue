<template>
    <div id="jumbotron">

        <img src="../../assets/img/jumbotron.jpg" alt="heroes">

        <div id="current">current series</div>

    </div>
</template>

<script>
export default {
    name: 'myJumbotron',
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variables.scss";

#jumbotron {
    height: $heightRow3;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    #current {
        color: white;
        text-transform: uppercase;
        background-color: $mainColor;
        padding: 10px 15px;
        font-weight: bold;
        position: absolute;
        top: 92.5%;
        left: 10%;
    }
}

</style>