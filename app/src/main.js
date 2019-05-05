import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import AunRadio from './components/AunRadio.vue'
import Channels from './components/Channels.vue'
import Chat from './components/Chat.vue'
import Discover from './components/Discover.vue'
import Educational from './components/Educational.vue'
import Error from './components/Error.vue'
import Home from './components/Home.vue'
import MovieInfo from './components/MovieInfo.vue'
import SeriesInfo from './components/SeriesInfo.vue'
import Movies from './components/Movies.vue'
import Request from './components/Request.vue'
import Rewards from './components/Rewards.vue'
import Series from './components/Series.vue'
import Subscription from './components/Subscription.vue'
import Trending from './components/Trending.vue'
import UserSettings from './components/UserSettings.vue'
import Login from './components/Login.vue'
// import Player from './components/VideoPlayer.vue'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/aun-radio',
      name: 'aunRadio',
      component: AunRadio
    },
    {
      path: '/channels',
      name: 'channels',
      component: Channels
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/educational',
      name: 'educational',
      component: Educational
    },

    {
      path: '/movie-info/:id',
      name: 'movieInfo',
      component: MovieInfo
    },
    {
      path: '/series-info/:id',
      name: 'SeriesInfo',
      component: SeriesInfo
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/request',
      name: 'request',
      component: Request
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: Rewards
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: Subscription
    },
    {
      path: '/trending',
      name: 'trending',
      component: Trending
    },
    {
      path: '/user-settings',
      name: 'userSettings',
      component: UserSettings
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/player',
    //   name: 'player',
    //   component: Player
    // },
    {
      path: '*',
      name: 'error',
      component: Error
    },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')