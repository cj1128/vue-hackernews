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
