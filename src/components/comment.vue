<!--
  @Author: CJ Ting
  @Date:   2017-06-11 17:45:46
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-11 18:03:58
-->
<template lang="pug">
.comment
  template(v-if="item")
    .comment__header
      router-link(:to="'/user/' + item.by") {{ item.by }}
      span {{ item.time | timeAgo }}
    .comment__text(v-html="item.text")
  _loading(v-else)
</template>

<script>
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
      item: null,
    }
  },
  created() {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json`)
      .then(res => {
        this.item = res.data
      })
  },
}
</script>

<style lang="stylus">
.comment
  padding: 15px 0
  border-top: 1px solid #eee

.comment__header
  display: flex
  align-items: center
  color: #828282
  margin-bottom: 10px
  font-size: 0.9rem
  > a
    color: #828282
    text-decoration: underline
    margin-right: 5px

.comment__text
  color: #34495e
  line-height: 1.4em
  overflow-wrap: break-word
  font-size: 0.95rem
</style>
