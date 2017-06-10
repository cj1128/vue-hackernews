<!--
  @Author: CJ Ting
  @Date:   2017-06-06 21:13:51
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 18:31:56
-->
<template lang="pug">
.item
  .item__score {{ item.score }}
  .item__main
    .item__title
      a(:href="item.url", target="_blank") {{ item.title }}
      span {{ item.url | getDomain }}
    .item__meta
      span by
      a(:href="'/user/' + item.by") {{ item.by }}
      span {{ item.time | timeAgo }}
      template(v-if="item.descendants")
        span |
        a(:href="'/item/' + item.id") {{ item.descendants }} comments
</template>

<script>
import timeago from "timeago.js"
import axios from "axios"

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  filters: {
    getDomain(url) {
      if(!url) return
      return new URL(url).host
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
