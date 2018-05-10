<template lang="pug">
._loading
  | {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Loading...",
    }
  },
}
</script>

<style lang="stylus">
</style>
