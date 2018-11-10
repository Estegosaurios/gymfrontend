import Vue from 'vue';
import Router from 'vue-router';
import TheHeader from '@/core/TheHeader';

const WorkoutsOverview = () => import(/* webpackChunkName: "workouts-overview" */ '@/workouts/WorkoutsOverview');
const CalendarOverview = () => import(/* webpackChunkName: "workouts-overview" */ '@/schedule/CalendarOverview');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: 'workouts',
      name: 'workouts-overview',
      components: {
        header: TheHeader,
        default: WorkoutsOverview,
      },
      meta: {
        name: 'Workouts',
        icon: 'dumbbell'
      }
    },
    {
      path: 'schedule',
      name: 'schedule-overview',
      components: {
        header: TheHeader,
        default: CalendarOverview,
      },
      meta: {
        name: 'Schedule',
        icon: 'calendar'
      }
    },
    { path: '*', redirect: { name: 'workouts-overview' } }
  ]
});
