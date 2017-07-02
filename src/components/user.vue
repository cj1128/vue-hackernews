<!--
  @Author: dingdingbai
  @Date:   2017-07-02 12:31:48
  @Last Modified by:   dingdingbai
  @Last Modified time: 2017-07-02 16:03:46
-->
<template lang="pug">
.page-user
  template(v-if="user")
    h1 ID: {{ user.id }}
    .page-user__info
      p Created: {{ user.created | timeAgo }}
      p Karma: {{ user.karma }}
    .page-user__links
      a(
        :href="'https://news.ycombinator.com/submitted?id=' + user.id",
        target="_blank",
      ) submissions
      span |
      a(
        :href="'https://news.ycombinator.com/threads?id=' + user.id",
        target="_blank",
      ) comments

  _loading(v-else)
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      user: null,
    }
  },
  created() {
    const username = this.$route.params.user
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${username}.json?`).then(res => {
      this.user = res.data
    })
  },
}
</script>

<style lang="stylus">
.page-user
  max-width: 800px
  margin: auto
  background: white
  padding: 30px
  color: #34495e

.page-user__links
  display: flex
  align-items: center
  > span
    margin: 0 5px
  > a
    color: #34495e
</style>
