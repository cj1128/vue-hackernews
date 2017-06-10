<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:11:55
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 20:13:11
-->
<template lang="pug">
.page-new
  items(
    dataURL="https://hacker-news.firebaseio.com/v0/newstories.json",
    path="/new"
  )
</template>

<script>
import Items from "@/components/items"
import { generatePageGuard } from "@/router"

export default {
  components: { Items, },
  beforeRouteUpdate: generatePageGuard("/new"),
}
</script>

<style lang="stylus">
</style>
