<!--
  @Author: CJ Ting
  @Date:   2017-06-11 17:04:32
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-11 18:57:00
-->
<template lang="pug">
.item
  template(v-if="item")
    .item__header
        .item__header__title
          a(:href="item.url", target="_blank") {{ item.title }}
          span {{ item.url | getDomain }}
        .item__header__meta
          span {{ item.score }} points
          span | by
          router-link(:to="'/user/' + item.by") {{ item.by }}
          span {{ item.time | timeAgo }}
    .item__comments
      .item__comments__header
        | {{ item.descendants }} comments
      comment(
        v-for="id in item.kids",
        :id="id",
        :key="id",
        :level="1",
      )
  _loading(v-else)
</template>

<script>
import axios from "axios"
import Comment from "@/components/comment"

export default {
  data() {
    return {
      item: null,
    }
  },
  created() {
    var itemID = this.$route.params.id
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${itemID}.json`)
      .then(res => {
        // res.data.kids = res.data.kids.slice(0, 1)
        this.item = res.data
      })
  },
  components: { Comment, },
}
</script>

<style lang="stylus">
.item
  width: 80%
  max-width: 800px
  margin: auto
  > ._loading
    margin: 100px 0
    text-align: center

.item__header
  background-color: white
  margin-bottom: 20px
  padding: 30px 20px
  box-shadow: 0 1px 2px rgba(0,0,0,.1)

.item__header__title
  display: flex
  align-items: center
  > a
    font-size: 1.5rem
    color: #34495e
    text-decoration: none
    margin-right: 20px
    font-weight: bold
  > span
    color: #828282

.item__header__meta
  display: flex
  align-items: center
  color: #828282
  margin-top: 15px
  > *
    margin-right: 8px
  > a
    text-decoration: underline
    color: #828282

.item__comments
  background-color: white
  box-shadow: 0 1px 2px rgba(0,0,0,.1)
  padding: 0 20px

.item__comments__header
  padding: 15px 0
  color: #34495e
  font-size: 1.2rem
</style>
