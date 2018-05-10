<template lang="pug">
.list__item
  .list__item__score {{ item.score }}
  .list__item__main
    .list__item__title
      a(:href="item.url", target="_blank") {{ item.title }}
      span {{ item.id }}
      span {{ item.url | getDomain }}
    .list__item__meta
      span by
      router-link(:to="'/user/' + item.by") {{ item.by }}
      span {{ item.time | timeAgo }}
      template(v-if="item.descendants")
        span |
        router-link(
          :to="'/item/' + item.id"
        ) {{ item.descendants }} comments
</template>

<script>
import axios from "axios"

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
.list__item
  display: flex
  align-items: center
  padding: 20px 0
  border-bottom: 1px solid #eee

.list__item__score
  color: #f60
  font-size: 1.1em
  font-weight: 700
  margin-right: 20px
  width: 50px

.list__item__main
  flex: 1

.list__item__title
  line-height: 1.8rem
  > a
    color: #34495e
    text-decoration: none
  > span
    padding-left: 10px
    color: #828282
    font-size: 0.8rem

.list__item__meta
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
