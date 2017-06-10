<!--
  @Author: CJ Ting
  @Date:   2017-06-06 21:13:51
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 16:47:22
-->
<template lang="pug">
.item
  div(v-if="!d")
    p Loading...
  template(v-else)
    .item__score {{ d.score }}
    .item__main
      .item__title
        a(:href="d.url", target="_blank") {{ d.title }}
        span {{ d.id }}
        span {{ d.url | getDomain }}
      .item__meta
        span by
        a(:href="'/user/' + d.by") {{ d.by }}
        span {{ d.time | timeAgo }}
        template(v-if="d.descendants")
          span |
          a(:href="'/item/' + d.id") {{ d.descendants }} comments
</template>

<script>
import timeago from "timeago.js"
import axios from "axios"

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      d: null,
    }
  },
  created: function() {
    axios(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`)
      .then(res => this.d = res.data)
  },
  filters: {
    getDomain(url) {
      if(!url) return
      return new URL(url).host
      // return "(" + url.match(/https?:\/\/(.+?)\/?/)[1] + ")"
    },
    timeAgo(ts) {
      return timeago().format(ts * 1000)
    },
  },
}
</script>

<style lang="stylus">
.item
  display: flex
  align-items: center
  padding: 20px 0
  border-bottom: 1px solid #eee

.item__score
  color: #f60
  font-size: 1.1em
  font-weight: 700
  margin-right: 20px
  width: 50px

.item__main
  flex: 1

.item__title
  line-height: 1.8rem
  > a
    color: #34495e
    text-decoration: none
  > span
    padding-left: 10px
    color: #828282
    font-size: 0.8rem

.item__meta
  color: #828282
  font-size: 0.9rem
  > a
    color: #828282
    margin-right: 10px
    &:hover
      color: #f60
  > span
    margin-right: 10px
</style>
