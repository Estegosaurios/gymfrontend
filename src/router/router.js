import Vue from 'vue';
import Router from 'vue-router';

const  ProgramsOverview = () => import(/* webpackChunkName: "programs-overview" */ '@/programs/ProgramsOverview');
const  WorkoutsOverview = () => import(/* webpackChunkName: "workouts-overview" */ '@/workouts/WorkoutsOverview');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/programs',
      name: 'programs-overview',
      component: ProgramsOverview,
    },
    {
      path: '/workouts',
      name: 'workouts-overview',
      component: WorkoutsOverview,
    },
    { path: '*', redirect: '/programs' }
  ]
});
