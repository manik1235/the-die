<template>
  <div class="the-die">
    {{ face }}
  </div>
</template>

<script>
export default {
  name: 'TheDie',
  props: {
    faces: Array
  },
  computed: {
    face () {
      return this.faces[Math.floor(Math.random() * this.faces.length)]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
