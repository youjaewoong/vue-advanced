import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'

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
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: createListView('NewsView'),
        name: 'news'
      },
      {
        path: '/ask',
        component: createListView('AskView'),
        name: 'ask'
      },
      {
        path: '/jobs',
        component: createListView('JobsView'),
        name: 'jobs'
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