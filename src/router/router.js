import Vue from 'vue';
import Router from 'vue-router';
import ProgramsOverview from '@/programs/ProgramsOverview';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'programs',
      component: ProgramsOverview,
    }
  ]
});
