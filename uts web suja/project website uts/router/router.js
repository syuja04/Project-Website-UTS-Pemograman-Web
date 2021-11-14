const banner = { template: '<p>Home</p>' };
const banner2 = { template: '<p>Explore Vehicles</p>' };
const banner3 = { template: '<p>Review contact</p>' };

Vue.use(VueRouter);

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: banner,
  },
  {
    path: '/Explore Vehicles',
    name: 'Explore Vehicles',
    component: banner2,
  },
  {
    path: '/Review contact',
    name: 'Review contact',
    component: banner3,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
