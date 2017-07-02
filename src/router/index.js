import Vue from "vue"
import Router from "vue-router"
import Top from "@/components/top"
import New from "@/components/new"
import Show from "@/components/show"
import Ask from "@/components/ask"
import Job from "@/components/job"
import Basic from "@/components/basic"
import Item from "@/components/item"
import User from "@/components/user"

Vue.use(Router)

export function generatePageGuard(path) {
  return function(to, from, next) {
    if(to.path === path) {
      next()
      return
    }

    var page = to.params.page
    if(!/^[1-9]\d*$/.test(page)) {
      next(path + "/1")
    } else {
      next()
    }
  }
}

export default new Router({
  routes: [
    {
      path: "/",
      component: Basic,
      children: [
        {
          path: "",
          redirect: "top",
        },
        {
          path: "top/:page?",
          component: Top,
          beforeEnter: generatePageGuard("/top"),
        },
        {
          path: "new/:page?",
          component: New,
          beforeEnter: generatePageGuard("/new"),
        },
        {
          path: "show/:page?",
          component: Show,
          beforeEnter: generatePageGuard("/show"),
        },
        {
          path: "ask/:page?",
          component: Ask,
          beforeEnter: generatePageGuard("/ask"),
        },
        {
          path: "job/:page?",
          component: Job,
          beforeEnter: generatePageGuard("/job"),
        },
        {
          path: "item/:id",
          component: Item,
        },
        {
          path: "user/:user",
          component: User,
        },
      ],
    },
  ]
})
