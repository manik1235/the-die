<template>
<div class="the-die">
  <div class="the-die-face">
    <div class="the-die-value">
      {{ face }}
    </div>
  </div>
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
.the-die-face {
  border-radius: 5px;
  border: 1px solid black;
  height: 30px;
  width: 30px;
}

.the-die-value {
  padding-top: 4px;
  padding-bottom: 1px;
}
</style>
