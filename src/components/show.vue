<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:33:59
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 20:13:11
-->
<template lang="pug">
.page-show
  items(
    dataURL="https://hacker-news.firebaseio.com/v0/showstories.json",
    path="/show"
  )
</template>

<script>
import Items from "@/components/items"
import { generatePageGuard } from "@/router"

export default {
  components: { Items, },
  beforeRouteUpdate: generatePageGuard("/show"),
}
</script>

<style lang="stylus">
</style>
