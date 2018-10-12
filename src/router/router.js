import Vue from 'vue';
import Router from 'vue-router';
import TheHeader from '@/core/TheHeader';
import TheFooter from '@/core/TheFooter';
import TheProgramsPage from '@/core/TheProgramsPage';

const ProgramsOverview = () => import(/* webpackChunkName: "programs-overview" */ '@/programs/ProgramsOverview');
const WorkoutsOverview = () => import(/* webpackChunkName: "workouts-overview" */ '@/workouts/WorkoutsOverview');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/exercise',
      name: 'exercise',
      component: TheProgramsPage,
      meta: { name: 'Exercise' },
      children: [
        {
          path: 'programs',
          name: 'programs-overview',
          components: {
            header: TheHeader,
            default: ProgramsOverview,
            footer: TheFooter
          },
          meta: { name: 'Programs' }
        },
        {
          path: 'workouts',
          name: 'workouts-overview',
          components: {
            header: TheHeader,
            default: WorkoutsOverview,
            footer: TheFooter
          },
          meta: { name: 'Workouts' }
        },
      ]
    },
    { path: '*', redirect: { name: 'programs-overview' } }
  ]
});
