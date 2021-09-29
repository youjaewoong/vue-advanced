import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
//import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js';
import { store } from '../store/index.js'

Vue.use(VueRouter);
export const router = new VueRouter({ 
    mode :'history', //해쉬값을 제거한다.
    routes: [
      {
         path: '/',
         redirect: '/news',
         name: 'news'
       },
      {
       // path: url 주소
        path: '/news',
        component: NewsView,
        name: 'news',
        beforeEnter: (to, from, next ) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
          .then(() => {
              console.log('fetched');
              next();
          })
          .catch((error) => {
              console.log(error);
          });
         },
      },
      {
        path: '/ask',
        component: AskView,
        name: 'ask',
        beforeEnter: (to, from, next ) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
          .then(() => {
              console.log('fetched');
              next();
          })
          .catch((error) => {
              console.log(error);
          });
         },
      },
      {
        path: '/jobs',
        component: JobsView,
        name: 'jobs',
        beforeEnter: (to, from, next ) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
          .then(() => {
              console.log('fetched');
              next();
          })
          .catch((error) => {
              console.log(error);
          });
         },
      },
      {
        path: '/user/:name',
        component: UserView,
      },
      {
        path: '/item/:id',
        component: ItemView,
      }
    ]
  })