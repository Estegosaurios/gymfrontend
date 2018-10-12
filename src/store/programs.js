import programManager from '@/managers/program';

const state = {
  programs: []
};

const getters = {
  getPrograms (state, _, rootState) {
    const programs = rootState.entities.programs;
    return state.programs.map(p => programs[p]);
  }
};

const mutations = {
  setPrograms(state, programs) {
    state.programs = programs;
  }
};

const actions = {
  fetchPrograms({ commit }) {
    programManager.fetchPrograms().then(data => {
      commit('mergeEntities', data.entities);
      commit('setPrograms', data.result);
    });
  }
};

const store = {
  state,
  getters,
  mutations,
  actions
};

export default store;