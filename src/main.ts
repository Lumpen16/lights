import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';

import RedLight from './components/RedLight.vue';
import YellowLight from './components/YellowLight.vue';
import GreenLight from './components/GreenLight.vue'

import TrafficLight from './components/TrafficLight.vue';
import LightCounter from './components/LightCounter.vue'

const routes = [
  { path: '', component: App, redirect: '/green'},
  { path: '/red', component: RedLight },
  { path: '/yellow', component: YellowLight },
  { path: '/green', component: GreenLight },
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App)
app.component('traffic-light', TrafficLight)
app.component('light-counter', LightCounter)
app.use(router)
app.mount('#app')


