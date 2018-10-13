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
  setProgram(state, program) {
    if (state.programs.some(p => p === program)) { return }
    state.programs.unshift(program)
  },
  setPrograms(state, programs) {
    state.programs = programs;
  }
};

const actions = {
  fetchPrograms({ commit }) {
    programManager.fetchPrograms().then(programs => {
      commit('mergeEntities', programs.entities);
      commit('setPrograms', programs.result);
    });
  },
  saveProgram({ commit }, data) {
    programManager.saveProgram(data).then(program => {
      commit('mergeEntities', program.entities);
      commit('setProgram', program.result);
    })
  }
};

const store = {
  state,
  getters,
  mutations,
  actions
};

export default store;