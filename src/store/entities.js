const state = {}

const mutations = {
  mergeEntities(state, entities) {
    Object.assign(state, entities);
  }
}

const store = {
  state,
  mutations
}

export default store;
