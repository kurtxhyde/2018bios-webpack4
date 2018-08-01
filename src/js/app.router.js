/* eslint no-console:off */
import VueRouter from 'vue-router';
import Vue from 'vue';
import store from './store';

import Main from './component/Main.vue';

Vue.use(VueRouter);

//const Rule = () => import(/* webpackChunkName: "Track" */'./component/Rule.vue');
const Login = () => import(/* webpackChunkName: "Login" */'./component/Login.vue');

const log = value => console.log(`%c${value}`, 'background: #bdc3c7; color: black; font-size:10px;');
const DEV_MODE = (process.env.NODE_ENV === 'development');
const ROOT = process.env.ROOT//'/EssentialEnergy/dev/'


const router = new VueRouter({
  mode: 'hash',
  base:ROOT,
  linkActiveClass:'act',
  routes: [
    { path: '/' , component: Main ,name:'index'},
    //{ path: '/rule' , component: Rule ,name:'rule'},
    //{ path: '/winner', name:'winner'},
    
    //{ path: '/age/:id/user/:uid' , component: Main ,name:'index' , redirect:'/' },
    // { path: '/game/' , component: Game ,name:'game'},
    //{ path: '/game/', component: Game, meta: {  } ,name:'game'},///定义路由的时候可以配置 meta 字段：
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});

router.beforeEach((to, from, next) => {
  //log(`Router beforeEach to: ${to.path} from: ${from.path}`);
  // console.log('name....'+to.name)
  console.log('age....'+to.params.id)
  console.log('user....'+to.params.uid)
  store.commit('path' , to.name);
  if(to.name=='index'){
    store.commit('age' , to.params.id);
  }


  if (to.matched.some(record => record.meta.authorization || false)) {
    const isLogin = store.state.isLogin;

    if (isLogin) {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } });
    }
  } else {
    
     //ga('send', 'event', to.name , 'pv', '', 1);
     //gtag('event' , 'shsh' , {'category':to.name , 'action':'pv' , 'label':''})
     next();
  }
});
export default router;
