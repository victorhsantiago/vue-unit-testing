<template>
  <div id="app">
    <message-display />
  </div>
</template>

<script>
export default {
  components: {
    MessageDisplay: () => import('@/components/MessageDisplay.vue'),
  },
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
