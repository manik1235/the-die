<template>
  <div id="app">
    <TheDie :faces="faces"/>
  </div>
</template>

<script>
import TheDie from './components/TheDie.vue'

export default {
  name: 'App',
  data () {
    return {
      faces: [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    }
  },
  components: {
    TheDie
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
