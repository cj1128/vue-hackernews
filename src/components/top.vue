<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:11:52
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 17:24:01
-->
<template lang="pug">
.page-top
  p(v-if="!data")
    | Loading....
  template(v-else)
    page-nav(
      :currentPage="page"
      :totalPage="totalPage"
      :onPrev="prev"
      :onNext="next"
    )
    .page-top__items
      item(v-for="id in ids", :id="id", :key="id")
</template>

<script>
import axios from "axios"
import Item from "@/components/item"
import PageNav from "@/components/page-nav"

export default {
  data() {
    return {
      page: null,
      data: null,
    }
  },
  computed: {
    ids() {
      var start = (this.page - 1) * 20
      return this.data.slice(start, start + 20)
    },
    totalPage() {
      return Math.ceil(this.data.length / 20)
    },
  },
  methods: {
    prev() {
      this.$router.push("/top/" + (this.page - 1))
    },
    next() {
      this.$router.push("/top/" + (this.page + 1))
    },
  },
  created() {
    axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => {
        this.data = res.data
        this.page = Number(this.$route.params.page) || 1
      })
  },
  watch: {
    "$route": function() {
      this.page = Number(this.$route.params.page) || 1
    },
  },
  components: { Item, PageNav },
}
</script>

<style lang="stylus">
.page-top__items
  max-width: 800px
  margin: auto
  margin-top: 20px
  background: white
  padding: 20px
  border-radius: 5px
</style>
