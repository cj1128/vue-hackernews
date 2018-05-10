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
