<!--
  @Author: CJ Ting
  @Date:   2017-06-10 16:48:39
  @Last Modified by:   CJ Ting
  @Last Modified time: 2017-06-10 17:10:10
-->
<template lang="pug">
.page-nav
  .page-nav__btn(
    :class="{'page-nav__btn--disabled': prevDisabled}",
    @click="onPrev",
  ) < prev
  .page-nav__current {{ currentPage }}/{{ totalPage }}
  .page-nav__btn(
    :class="{'page-nav__btn--disabled': nextDisabled}",
    @click="onNext"
  ) next >
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    onPrev: {
      type: Function,
      required: true,
    },
    onNext: {
      type: Function,
      required: true,
    },
  },
  computed: {
    prevDisabled() {
      return this.currentPage === 1
    },
    nextDisabled() {
      return this.currentPage === this.totalPage
    },
  },
}
</script>

<style lang="stylus">
.page-nav
  display: flex
  align-items: center
  color: #34495e

.page-nav__btn
  cursor: pointer
  &:first-child
    margin-left: auto
  &:last-child
    margin-right: auto
.page-nav__btn--disabled
  color: #ccc
  cursor: not-allowed

.page-nav__current
  margin: 10px
</style>
