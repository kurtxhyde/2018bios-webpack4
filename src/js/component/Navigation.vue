<style lang="less" src="navigation.less" scoped></style>
<template lang="pug">
nav.navbar.navbar-fixed-top
  .container
    .navbar-header
      button(type="button",class="navbar-toggle collapsed" ,data-toggle="collapse" ,data-target="#navbar" ,aria-expanded="false" ,aria-controls="navbar")

          span.sr-only Toggle navigation
          span.icon-bar.top
          span.icon-bar.mid
          span.icon-bar.bottom
      router-link.tracklink.navbar-brand(data-ga="logo", :to="{ path: '/index/' + age}")
          
          span 
    #navbar.navbar-collapse.collapse
      ul.nav.navbar-nav.relat
        //- li.m1o(data-id='0')
        //-     router-link.tracklink.custom(data-ga="index",data-href="index.html",href="index.html" , to="./") 首頁
        //- li.m1o(data-id='1')
        //-     router-link.hash.custom(data-ga="game",data-href="index.html#/game",href="index.html#/game", to="./game") 肌能快篩檢測
        //- li(data-id='fb')
        //-     a.social.fb.tracklink(data-ga="fanspage",data-href="https://www.facebook.com/globalshiseidotw/", href="https://www.facebook.com/globalshiseidotw/" , target="_blank")
        //-         //- img(src="../../img/dest/fb.png")
        //- li(data-id='line')
        //-     a.social.line.tracklink(data-ga="line",data-href="https://line.me/R/ti/p/@globalshiseidotw",href="https://line.me/R/ti/p/@globalshiseidotw"  , target="_blank")
                //- img(src="../../img/dest/line.png")
      


</template>

<script>

import { mapGetters } from 'vuex';
//import { INDEX } from "../utils/menu.js";
export default{
  data() {
    return {

    };
  },
  methods:{
    updateNav(){
    let p = this.path;
    console.log('path:......' + p)
    let btnRule = $('.mrule') , btnIndex= $('.mindex')
      if(p == 'rule'){
        TweenMax.to(btnRule , .2,{delay:.5,right:-80,ease:Sine.easeIn})
        TweenMax.to(btnIndex , .2,{delay:1,right:0,ease:Sine.easeOut})
      }else{
        TweenMax.to(btnRule , .2,{delay:1,right:0,ease:Sine.easeOut})
        TweenMax.to(btnIndex , .2,{delay:.5,right:-80,ease:Sine.easeIn})
      }
    },
  },
  computed: {
    ...mapGetters(['path']),
    ...mapGetters(['age']),
    
  },
  
  watch:{
    path:function(){
      let p = this.path
      // console.log(str);
      $('nav.navbar li a').each(function(){
          let ga= $(this).data('ga');
          if(ga==p){
            $(this).addClass('act')
          }
      })
      
      this.updateNav();
    }

  },
  
  mounted:function(){
     $('.side').find('.tracklink').not('.hash').each(function(){
        $(this).click(function(e) {

                let target = $(this).attr('target');
                let href = $(this).attr('href');
                let act = $(this).data('act');

                let ga = $(this).data('ga');
                //ga('send', 'event', 'menu', 'click', 'product', 1);
                //gtag('event' , 'shsh' , {'category':'menu' , 'action':'click' , 'label':'product'})
                clk(target, href, act, ga, e);

                return false;
            })
     })


     function clk(target, href, act, ga, e) {
            e.preventDefault();
            //GLOBAL.ga.GT('/menu', '.btn.' + ga);
            if (act == "disable") {
                alert("Coming Soon!")
            } else if (target === '_blank') {
                window.open(href, target);
            } else {
                setTimeout(function() { window.open(href, '_self'); }, 300)
            }
        }
        this.updateNav();
  },
  
};
</script>