export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/HomePage/HomePage.vue"),
  },
  {
    path: "/project/:id",
    name: "project",
    component: () => import("./views/ProjectDetails/ProjectDetails.vue"),
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./views/NotFound/NotFound.vue') },
];
