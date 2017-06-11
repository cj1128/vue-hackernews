<!--
  @Author: CJ Ting
  @Date:   2017-06-11 17:04:32
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-11 19:47:55
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
      template(v-if="comments")
        comment(
          v-for="comment in comments",
          :item="comment"
          :key="comment.id",
        )
      _animation-loading(v-else)
</template>

<script>
import axios from "axios"
import Comment from "@/components/comment"

export default {
  data() {
    return {
      item: null,
      comments: null,
    }
  },
  methods: {
    fetchComments() {
      if(this.item.kids == null) {
        this.comments = []
        return
      }

      var f = ids => {
        var result = {}
        return Promise.all(ids.map(id => this.fetchComment(id).then(res => {
            result.by = res.data.by
            result.time = res.data.time
            result.text = res.data.text
            result.id = res.data.id
          if(res.data.kids == null) {
            return Promise.resolve([])
          } else {
            return f(res.data.kids)
          }
        }).then(children => {
          result.children = children
          return Promise.resolve(result)
        })))
      }

      f(this.item.kids).then(d => {
        console.log(d)
        this.comments = d
      })
    },
    fetchComment(id) {
      return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  },
  },
  created() {
    var itemID = this.$route.params.id
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${itemID}.json`)
      .then(res => {
        this.item = res.data
        this.fetchComments()
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
  > ._animation-loading
    padding: 50px 0

.item__comments__header
  padding: 15px 0
  color: #34495e
  font-size: 1.2rem
</style>
