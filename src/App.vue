<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    }
  },
}
</script>

<style src="normalize.css" />
<style lang="stylus">
body
  background: #f2f3f5
#app
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
