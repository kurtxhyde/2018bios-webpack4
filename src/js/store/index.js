/* eslint no-shadow:0, no-param-reassign:0 */
import Vuex from 'vuex';
import Vue from 'vue';
//import axios from 'axios';

Vue.use(Vuex);

const state = {
  showPageLoading: true,
  //showWinner: false,
  showLoading: false,
  isLogin: false,
  userName: '',
  count: 0,
  /**
   * loading 百分比
   */
  percentLoading:0,
  
  /**
    目前的葉面名稱  
    可參考app.router
   */ 
  
  path:'index',
  /**
   * 會員的寶寶年紀
   */
  age:'p',
  /**
   * 是否播放過任一影片
   */
  videoplayed:false,
};

/////////////////////////////////////////////////////
// vue 裡用 this.$store.commit('showLoading' , true) //
// mutation 必須是同步函數, 很重要                  //
/////////////////////////////////////////////////////
const mutations = {
  isLogin(state, value) {
    state.isLogin = value;
  },
  showPageLoading(state, value){
    state.showPageLoading = value;
  },
  // showWinner(state, value){
  //   state.showWinner = value;
  // },
  showLoading(state, value) {
    state.showLoading = value;
  },
  userName(state, name) {
    state.userName = name;
  },
  count(state) {
    state.count += 1;
  },
  
  percentLoading(state , val) {
    state.percentLoading = val;
  },
  
  path(state , p){
    console.log('path commit')
    state.path = p;
  },
  
  age(state , val){
    state.age = val;
  },
  
  videoplayed(state,val){
    state.videoplayed = val;
  }
};

//////////////////////////////////////////////////////////////
//  vue 裡用 this.$store.dispatch('showLoading' , true)         
//  methods(){  ...Vuex.mapActions(['showLoading','count']),}   
//  Action 類似於 mutation，不同在於：                          
//  Action 提交的是 mutation，而不是直接變更狀態。              
//  Action 可以包含任意異步操作。                               
//  Action 可以非同步，但一定只能 return Promise                
//////////////////////////////////////////////////////////////


//////////
// TEST  CTRL+SHIFT + J//
//////////

const actions = {
  showPageLoading({ commit }, value) {
    commit('showPageLoading', value);
  },
  //  showWinner({ commit }, value) {
  //   commit('showWinner', value);
  // },
  showLoading({ commit }, value) {
    commit('showLoading', value);
  },
};

/////////////////////////////////////////////////////
//Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。 //
//就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，                //
//且只有当它的依赖值发生了改变才会被重新计算。                           //
/////////////////////////////////////////////////////
const getters = {
  showPageLoading: state => state.showPageLoading,
 // showWinner: state => state.showWinner,
  showLoading: state => state.showLoading,
  isLogin: state => state.isLogin,
  userName: state => state.userName,
  count: state => state.count,
  percentLoading :state=> state.percentLoading,
  path :state => state.path,
  age: state => state.age,
  videoplayed:state => state.videoplayed,
};


// https://vuex.vuejs.org/en/plugins.html
// Plugins
const myPlugin = (store) => {
  // called when the store is initialized
  store.subscribe((mutation) => {
    // called after every mutation.
    console.log(mutation);
    // The mutation comes in the format of { type, payload }.
  });
};
const store = new Vuex.Store({
  plugins: [myPlugin],
  state,
  getters,
  actions,
  mutations,
  strict: true,
});
export default store;
