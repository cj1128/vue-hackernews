<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:11:52
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 20:11:18
-->
<template lang="pug">
.page-top
  items(
    dataURL="https://hacker-news.firebaseio.com/v0/topstories.json",
    path="/top"
  )
</template>

<script>
import Items from "@/components/items"
import { generatePageGuard } from "@/router"

export default {
  components: { Items, },
  beforeRouteUpdate: generatePageGuard("/top"),
}
</script>

<style lang="stylus">
</style>
