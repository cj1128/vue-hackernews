<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:11:52
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 18:31:10
-->
<template lang="pug">
.page-top
  _loading(v-if="!data")
  template(v-else)
    page-nav(
      :currentPage="page"
      :totalPage="totalPage"
      :onPrev="prev"
      :onNext="next"
    )
    .page-top__items
      item(
        v-for="item in items",
        :key="item.id",
        :item="item",
      )
      _loading(v-if="!items")
</template>

<script>
import axios from "axios"
import Item from "@/components/item"
import PageNav from "@/components/page-nav"

function guardPage(to, from, next) {
  if(to.path === "/top") {
    next()
    return
  }

  var page = to.params.page
  if(!/^[1-9]\d*$/.test(page)) {
    next("/top/1")
  } else {
    next()
  }
}

export default {
  data() {
    return {
      page: null,
      data: null,
      items: null,
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.data.length / 20)
    },
  },
  methods: {
    fetchItems() {
      var url = "https://hacker-news.firebaseio.com/v0/item/"
      var start = (this.page - 1) * 20
      var ids = this.data.slice(start, start + 20)
      Promise.all(ids.map(function(id) {
        return axios.get(url + id + ".json")
      })).then(d => {
        this.items = d.map(res => res.data)
      })
    },
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
      this.items = null
    },
    page: function() {
      this.fetchItems()
    },
  },
  components: { Item, PageNav },
  beforeRouteEnter: guardPage,
  beforeRouteUpdate: guardPage,
}
</script>

<style lang="stylus">
.page-top
  > ._loading
    margin: 200px 0
    text-align: center
    font-size: 1.5rem
    color: #aaa
.page-top__items
  max-width: 800px
  margin: auto
  margin-top: 20px
  background: white
  padding: 20px
  border-radius: 5px
</style>
