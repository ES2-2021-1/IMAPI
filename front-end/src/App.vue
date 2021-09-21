<template>
  <body id="app">
    <!-- <BaseRaw title="Teste"/> -->
    <Base title="Teste"/>

  </body>

</template>

<script>
import Base from "./layouts/Base.vue";
// import BaseRaw from "./layouts/BaseRaw.vue";


export default {
  name: 'App',
  components: {
    Base,
    // BaseRaw
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
