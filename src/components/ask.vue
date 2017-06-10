<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:34:26
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 20:13:01
-->
<template lang="pug">
.page-ask
  items(
    dataURL="https://hacker-news.firebaseio.com/v0/askstories.json",
    path="/ask"
  )
</template>

<script>
import Items from "@/components/items"
import { generatePageGuard } from "@/router"

export default {
  components: { Items, },
  beforeRouteUpdate: generatePageGuard("/ask"),
}
</script>

<style lang="stylus">
</style>
