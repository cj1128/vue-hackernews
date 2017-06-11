/*
* @Author: CJ Ting
* @Date:   2017-06-10 17:54:25
* @Last Modified by:   CJ Ting
* @Last Modified time: 2017-06-11 19:41:53
*/
import Vue from "vue"
import Loading from "@/components/_loading"
import AnimationLoading from "@/components/_animation-loading"
import timeago from "timeago.js"

Vue.component("_loading", Loading)
Vue.component("_animation-loading", AnimationLoading)

Vue.filter("getDomain", function(url) {
  if(!url) return
  return "(" + new URL(url).host + ")"
})

Vue.filter("timeAgo", function(ts) {
  return timeago().format(ts * 1000)
})
