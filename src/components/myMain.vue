<template>
  <main>

    <div class="main-content">
      <div class="container">
        Testo segnaposto
      </div>
    </div>

    <blueSection/>

  </main>
</template>

<script>
import blueSection from './blueSection.vue';

export default {
  name: 'myMain',
  components: {
    blueSection,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/variables.scss";
.main-content {
  background-color: black;
  height: $heightRow1;

  .container {
    color: white;
    line-height: $heightRow1;
  }
}

</style>
