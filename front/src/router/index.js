import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:()=>import("@/views/Home.vue")
    },
    {
      path:"/joueurs",
      component:()=>import("@/views/Joueurs.vue")
    },
    {
      path:"/championnats",
      component:()=>import("@/views/Championnats.vue")
    },
    {
      path:"/match",
      component:()=>import("@/components/Match.vue")
    },
    {
      path:"/equipe",
      component:()=>import("@/views/Equipe.vue")
    }



  ]
})

export default router
