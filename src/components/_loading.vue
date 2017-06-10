<!--
  @Author: CJ Ting
  @Date:   2017-06-10 17:42:56
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 17:43:43
-->
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
