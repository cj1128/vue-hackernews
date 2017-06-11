<!--
  @Author: CJ Ting
  @Date:   2017-06-11 17:45:46
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-11 19:52:48
-->
<template lang="pug">
.comment
  .comment__header
    router-link(:to="'/user/' + item.by") {{ item.by }}
    span {{ item.time | timeAgo }}
  .comment__text(v-html="item.text")
  .comment__children(
    v-if="item.children.length > 0",
  )
    .comment__children__info(
      v-if="collapsed"
      @click="collapsed = false"
    )
      | [+] {{ childrenLength }} {{ childrenLength === 1 ? 'reply' : 'replies' }} collapsed
    div(v-show="!collapsed")
      .comment__children__toggle(@click="collapsed = true") [-]
      comment(
        v-for="comment in item.children",
        :item="comment"
        :key="comment.id",
      )
</template>

<script>
import axios from "axios"

export default {
  name: "comment",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    childrenLength() {
      return this.item.children.length
    },
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
  margin-bottom: 10px

.comment__children
  padding-left: 20px

.comment__children__info
  background-color: #fff4dc
  color: #828282
  cursor: pointer
  font-size: 0.9rem
  padding: 3px

.comment__children__toggle
  position: relative
  left: -20px
  top: 8px
  color: #828282
  cursor: pointer
</style>
