/* eslint no-console:off */
import VueRouter from 'vue-router';
import Vue from 'vue';
import store from './store';

import Main from './component/Main.vue';
import {GA} from './utils/ga.js';
import {GLOBAL} from  './utils/config.js';
Vue.use(VueRouter);

const Exam = () => import(/* webpackChunkName: "Track" */'./component/Exam.vue');
const Result1 = () => import(/* webpackChunkName: "Track" */'./component/Result1.vue');
const Result2 = () => import(/* webpackChunkName: "Track" */'./component/Result2.vue');
const Result3 = () => import(/* webpackChunkName: "Track" */'./component/Result3.vue');
const Result4 = () => import(/* webpackChunkName: "Track" */'./component/Result4.vue');
const form = () => import(/* webpackChunkName: "Track" */'./component/form.vue');
const comp = () => import(/* webpackChunkName: "Track" */'./component/complete.vue');
const rule = () => import(/* webpackChunkName: "Track" */'./component/Rule.vue');
const gallery = () => import(/* webpackChunkName: "Track" */'./component/Gallery.vue');
const bus = () => import(/* webpackChunkName: "Track" */'./component/Ghostbus.vue');
const redrobe = () => import(/* webpackChunkName: "Track" */'./component/Redrobe.vue');
const hospital = () => import(/* webpackChunkName: "Track" */'./component/Hospital.vue');
const office = () => import(/* webpackChunkName: "Track" */'./component/Office.vue');

const prod = () => import(/* webpackChunkName: "Track" */'./component/Prod.vue');
const winner = () => import(/* webpackChunkName: "Track" */'./component/Winner.vue');
//const Login = () => import(/* webpackChunkName: "Login" */'./component/Login.vue');

const log = value => console.log(`%c${value}`, 'background: #bdc3c7; color: black; font-size:10px;');
const DEV_MODE = (process.env.NODE_ENV === 'development');
const ROOT = process.env.ROOT//'/EssentialEnergy/dev/'


const router = new VueRouter({
  mode: 'hash',
  base:ROOT,
  linkActiveClass:'act',
  routes: [
    { path: '/' , component: Main ,name:'index'},
    { path: '/exam' , component: Exam ,name:'exam'},
    { path: '/result1' , component: Result1 ,name:'result1'},
    { path: '/result2' , component: Result2 ,name:'result2'},
    { path: '/result3' , component: Result3 ,name:'result3'},
    { path: '/result4' , component: Result4 ,name:'result4'},
    { path: '/form' , component: form ,name:'form'},
    { path: '/complete' , component: comp ,name:'comp'},
    { path: '/rule' , component: rule ,name:'rule'},
    { path: '/gallery' , component: gallery ,name:'gallery'},
    { path: '/ghost-bus' , component: bus ,name:'ghost-bus'},
    { path: '/hospital' , component: hospital ,name:'hospital'},
    { path: '/red-robe' , component: redrobe ,name:'red-robe'},
    { path: '/office' , component: office ,name:'office'},
    
    { path: '/product' , component: prod ,name:'product'},
    { path: '/winner' , component: winner ,name:'winner'},
    // { path: '/exam' , component: Exam ,name:'exam'},
    //{ path: '/winner', name:'winner'},
    
    //{ path: '/age/:id/user/:uid' , component: Main ,name:'index' , redirect:'/' },
    // { path: '/game/' , component: Game ,name:'game'},
    //{ path: '/game/', component: Game, meta: {  } ,name:'game'},///定义路由的时候可以配置 meta 字段：
  ],
  scrollBehavior (to, from, savedPosition) {
    
  },
});

GLOBAL.ga = new GA();
router.beforeEach((to, from, next) => {
  console.log('router breforeEach...' + to.params.typ)

  store.commit('path' , to.name);

  let dataJson={
  'subFolder':'2018_b5gel',
  'source':'bioessence',
  'trackType':'view',
  'trackSubfolderDepth':1,
  'targetType':to.name ,
  
  };
 /*ROUTE FROM NAV*/
  switch(to.params.typ){
    default:
      if(typeof to.params.typ != 'undefined')
      GLOBAL.ga.GT( '/' + to.params.typ  , '.btn.' + to.name )
      break;
  }
  
  ElandTracker.Track(dataJson);
  setTimeout(function (){
    GLOBAL.ga.GT( '/'+ to.name , '.pv')
  } , 5000)
  

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
