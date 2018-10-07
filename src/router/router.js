import Vue from 'vue';
import Router from 'vue-router';

const  ProgramsOverview = () => import('@/programs/ProgramsOverview');
const  WorkoutsOverview = () => import('@/workouts/WorkoutsOverview');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'programs-overview',
      component: ProgramsOverview,
    },
    {
      path: '/workouts',
      name: 'workouts-overview',
      component: WorkoutsOverview,
    }
  ]
});
