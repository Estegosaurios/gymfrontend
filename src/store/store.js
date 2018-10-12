import Vue from 'vue';
import Vuex from 'vuex';
import entities from '@/store/entities';
import programs from '@/store/programs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    entities,
    programs
  }
});
