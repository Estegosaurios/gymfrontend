import api from '@/api/client';

const state = {
  workouts: []
};

const getters = {
  getWorkouts (state, _, rootState) {
    const workouts = rootState.entities.workouts;
    return state.workouts.map(w => workouts[w]);
  }
};

const mutations = {
  setWorkout(state, workout) {
    if (state.workouts.some(p => p === workout)) { return }
    state.workouts.unshift(workout)
  },
  setWorkouts(state, workouts) {
    state.workouts = workouts;
  }
};

const actions = {
  fetchWorkouts({ commit }) {
    api.getWorkouts().then(response => {
      const workouts = response.data
      commit('mergeEntities', workouts.entities);
      commit('setWorkouts', workouts.result);
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