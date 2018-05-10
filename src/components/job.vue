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
