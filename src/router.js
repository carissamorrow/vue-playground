import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "start" */ './views/Start.vue')
      }
    },
    {
      path: '/expressions',
      name: 'expressions',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "expressions" */ './views/Expressions.vue')
      }
    },
    {
      path: '/bindings',
      name: 'bindings',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "bindings" */ './views/Bindings.vue')
      }
    },
    {
      path: '/looping',
      name: 'looping',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "looping" */ './views/Looping.vue')
      }
    },
    {
      path: '/computed-properties',
      name: 'computed-properties',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "computed-properties" */ './views/ComputedProperties.vue')
      }
    },
    {
      path: '/conditional-rendering',
      name: 'conditional-rendering',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "conditional-rendering" */ './views/ConditionalRendering.vue')
      }
    },
    {
      path: '/events',
      name: 'events',
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "events" */ './views/Events.vue')
      }
    }
  ]
})
