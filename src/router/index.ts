import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../Views/HomeView.vue"
import ProfesionalView from "../Views/ProfesionalView.vue"
import PacienteView from "../Views/PacienteView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profesional",
      name: "profesional",
      component: ProfesionalView
    },
    {
      path: "/paciente",
      name: "paciente",
      component: PacienteView
    }
  ],
});

export default router;
