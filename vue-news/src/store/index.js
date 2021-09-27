import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters: {
      fetchedAsk(state) {
        return state.ask;
      },
      fetchedItem(state) {
        return state.item;
      }
   },
    state: {
      user: {},
      item: {},
      list: []
    },
    mutations,
    actions
});