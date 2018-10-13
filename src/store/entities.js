import _ from 'lodash'

const state = {}

const mutations = {
  mergeEntities(state, entities) {
    _.merge(state, entities);
  }
}

const store = {
  state,
  mutations
}

export default store;
