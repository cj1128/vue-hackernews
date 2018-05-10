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
