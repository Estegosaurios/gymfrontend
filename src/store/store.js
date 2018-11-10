import Vue from 'vue';
import Vuex from 'vuex';
import entities from '@/store/entities';
import workouts from '@/store/workouts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    entities,
    workouts
  }
});
