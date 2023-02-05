import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:()=>import("@/views/Homepage.vue")
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
      component:()=>import("@/views/Match.vue")
    },
    {
      path:"/equipe",
      component:()=>import("@/views/Equipe.vue")
    },
    {
      path:"/championnat/:id",
      component:()=>import("@/views/AllMatch.vue")
    },
    {
      path:"/match/:idEquipe1/:idEquipe2/:idTournoi/:idMatch",
      component:()=>import("@/views/Match.vue")
    }
    ,
    {
      path:"/test",
      component:()=>import("@/views/Test.vue")
    }



  ]
})

export default router
