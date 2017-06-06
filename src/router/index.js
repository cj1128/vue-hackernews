import Vue from "vue"
import Router from "vue-router"
import Top from "@/components/top"
import New from "@/components/new"
import Show from "@/components/show"
import Ask from "@/components/ask"
import Job from "@/components/job"
import Basic from "@/components/basic"

Vue.use(Router)

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
          path: "top",
          component: Top,
        },
        {
          path: "new",
          component: New,
        },
        {
          path: "show",
          component: Show,
        },
        {
          path: "ask",
          component: Ask,
        },
        {
          path: "jobs",
          component: Job,
        },
      ],
    },
  ]
})
