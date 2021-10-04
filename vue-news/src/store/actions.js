
import { 
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList, 
    fetchUserInfo,
    fetchItem,
    fetchList }
from '../api/index.js';

export default{
    // promise
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    // FETCH_ASK({commit}) {
    //     fetchAskList()
    //         .then(({data}) => {
    //         commit('SET_ASK', data);
    //         return data;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },

    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    // FETCH_JOBS(context) {
    //     fetchJobsList()
    //         .then(response => {
    //         context.commit('SET_JOBS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },

    async FETCH_JOBS({commit}) {
        try{
            const response = await fetchJobsList()
            commit('SET_JOBS', response.data);
            return response;
        }catch (error) {
            console.log(error);
        }
    },

    async FETCH_USER({commit}, userName) {
        const response = await fetchUserInfo(userName)
        commit('SET_USER', response.data);
        return response;
    },

    async FETCH_ITEM({commit}, id) {
        const response = await fetchItem(id)
        commit('SET_ITEM', response.data);
        return response;
    },

    async FETCH_LIST({commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },
}