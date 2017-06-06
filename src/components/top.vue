<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:11:52
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-06 21:58:08
-->
<template lang="pug">
.page-top
  div(v-if="!ids")
    p Loading....
  div(v-else)
    item(v-for="id in ids", :id="id", :key="id")
</template>

<script>
import axios from "axios"
import Item from "@/components/item"

export default {
  data() {
    return {
      ids: null,
    }
  },
  created() {
    axios.get(" https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => {
        this.ids = res.data.slice(0,20)
      })
  },
  components: { Item },
}
</script>

<style lang="stylus">
</style>
