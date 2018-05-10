<template lang="pug">
.basic
  header.site-header
    nav
      img(src="../assets/logo.png")
      router-link.nav__a(
        to="/top",
      ) Top
      router-link.nav__a(
        to="/new",
      ) New
      router-link.nav__a(
        to="/show"
      ) Show
      router-link.nav__a(
        to="/ask"
      ) Ask
      router-link.nav__a(
        to="/job"
      ) Jobs
      p 😘&nbsp;&nbsp;built for BY
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
    > p
      margin-left: auto
      font-size: 0.9em
      color: #f5e7e7

.nav__a
  text-decoration: none
  margin-right: 30px
  font-weight: 500
  color: hsla(0,0%,100%,.8)
  &:hover
    color: white
    font-weight: bold
.nav__a.router-link-active
  color: white
  font-weight: bold

.main
  flex: 1
  overflow: auto
</style>
