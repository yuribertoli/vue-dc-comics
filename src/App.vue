<template>
  <div id="app">
    <myHeader/>
    <myMain/>
    <myFooter/>
  </div>
</template>

<script>
import myFooter from './components/myFooter.vue';
import myHeader from './components/myHeader.vue';
import myMain from './components/myMain.vue';

export default {
  name: 'App',
  components: {
    myFooter,
    myHeader,
    myMain
  }
}
</script>

<style lang="scss">
  @import "./assets/css/general.scss";
</style>
