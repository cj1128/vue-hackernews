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
