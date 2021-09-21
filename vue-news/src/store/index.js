import Vuex from 'vuex';
import Vue from 'vue';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      news: [],
      ask: [],
      jobs: []
    },
    mutations: {
        SET_NEWS(state, news) {
          state.news = news;
        },
        SET_ASK(state, ask) {
          state.ask = ask;
        },
        SET_JOBS(state, jobs) {
          state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
              console.log(error);
            });
        },
        FETCH_ASK({commit}) {
            fetchAskList()
                .then(({data}) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
              console.log(error);
            });
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                context.commit('SET_JOBS', response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }
    }
});