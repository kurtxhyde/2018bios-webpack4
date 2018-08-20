<style lang="less" src="loading.less" scoped></style>
<template lang="pug">

transition( :duration="{ enter:500, leave: 500 }" ,name='fade', mode='out-in')
  .loading(v-show='showPageLoading')
    .center
      .bg
      .ld
        img(src="../../img/dest/loading.gif")
        .txt.relat.inv {{percentLoading}}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['showPageLoading','percentLoading']),
  },
  watch:{
  		percentLoading:function(val){
  			//console.log(val + '....percentLoading');
  			if(val == 100){
  				
          TweenMax.to($('.loading .bg') , 1, {delay:.5 , opacity:0})  
  				
  			}
  		}
  },
};
</script>