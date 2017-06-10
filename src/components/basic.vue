<!--
  @Author: CJ Ting
  @Date:   2017-06-04 19:36:00
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 16:54:59
-->
<template lang="pug">
.basic
  header.site-header
    nav
      img(src="../assets/logo.png")
      router-link(to="/top") Top
      router-link(to="/new") New
      router-link(to="/show") Show
      router-link(to="/ask") Ask
      router-link(to="/jobs") Jobs
      p Built by CJ
  .main
    router-view
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.basic
  display: flex
  flex-direction: column
  height: 100vh

.site-header
  box-sizing: border-box
  margin: 0 auto
  background: #f60
  width: 100%
  > nav
    max-width: 800px
    display: flex
    align-items: center
    margin: auto
    color: white
    > img
      width: 24px
      margin-right: 30px
    > a
      text-decoration: none
      margin-right: 30px
      font-weight: 500
      color: white
    > p
      margin-left: auto

.page-nav
  padding: 15px 30px
  box-shadow: 0 1px 2px rgba(0,0,0,.1)
  background: white

.main
  flex: 1
  overflow: auto
</style>
