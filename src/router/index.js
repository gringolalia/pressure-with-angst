import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Adeus from '@/components/Adeus'
import Midnight from '@/components/BomDia'
import Angelina from '@/components/FarewellAngelina'
import Arms from '@/components/FarewellArms'
import Columbus from '@/components/GoodbyeColumbus'
import Descartes from '@/components/GoodbyeDescartes'
import SisterDisco from '@/components/GoodbyeSisterDisco'
import LongGoodbye from '@/components/LongGoodbye'
import Manzanar from '@/components/FarewellManzar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/alpha',
      name: 'Good Morning, Midnight',
      component: Midnight
    },
    {
      path: '/beta',
      name: 'Angelina',
      component: Angelina
    },
    {
      path: '/gamma',
      name: 'A Farewell to Arms',
      component: Arms
    },
    {
      path: '/delta',
      name: 'Goodbye Sister Disco',
      component: SisterDisco
    },
    {
      path: '/epsilon',
      name: 'Goodbye Columbus',
      component: Columbus
    },
    {
      path: '/zeta',
      name: 'The Long Goodbye',
      component: LongGoodbye
    },
    {
      path: '/eta',
      name: 'Goodbye Descartes',
      component: Descartes
    },
    {
      path: '/theta',
      name: 'Adeus Mundo',
      component: Adeus
    },
    {
      path: '/iota',
      name: 'Farewell Manzanar',
      component: Manzanar
    }
  ]
})
