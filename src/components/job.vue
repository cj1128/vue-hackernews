<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:34:37
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 20:13:01
-->
<template lang="pug">
.page-job
  items(
    dataURL="https://hacker-news.firebaseio.com/v0/jobstories.json",
    path="/job"
  )
</template>

<script>
import Items from "@/components/items"
import { generatePageGuard } from "@/router"

export default {
  components: { Items, },
  beforeRouteUpdate: generatePageGuard("/job"),
}
</script>

<style lang="stylus">
</style>
