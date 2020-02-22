<template>
  <router-view/>
</template>

<script>
import Vue from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
  @import './styles/style.scss';
</style>
