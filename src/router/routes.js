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
    path: '/main',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '/game', component: () => import('pages/Game.vue') },
      { path: '/inventor', component: () => import('pages/Inventor.vue') },
      { path: '/feature', component: () => import('pages/Feature.vue') },
      { path: '/spell', component: () => import('pages/Spell.vue') },
      { path: '/group', component: () => import('pages/Group.vue') },
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
