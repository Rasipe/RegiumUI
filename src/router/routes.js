
const routes = [
  {
    path: '/',
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/mainmenu', component: () => import('pages/MainMenu.vue') },
      { path: '/Load', component: () => import('pages/Load.vue') },
    ],
  },
  {
    path: '/Index',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
