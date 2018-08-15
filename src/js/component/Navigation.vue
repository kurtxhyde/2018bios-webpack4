<style lang="less" src="navigation.less" scoped></style>
<template lang="pug">
nav.navbar.navbar-fixed-top
  .bgx.abs.inv
    .all.abs
      
    .btm.abs
      img(src="../../img/dest/m-bg-btm.png")
    .top.abs
      img(src="../../img/dest/m-bg-top.png")
    .frame.abs
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

        li.m1o(data-id='0')
            router-link.tracklink.custom(data-ga="exam",data-href="",  to="./exam") 
              img.ico(src="../../img/dest/m-ico1.png")
              img(src="../../img/dest/m1.png")

        .line
          img(src="../../img/dest/mline.png")
        

        li.m2o(data-id='1')
            router-link.hash.custom(data-ga="gallery",data-href="", to="./gallery") 
              img.ico(src="../../img/dest/m-ico2.png")
              img(src="../../img/dest/m2.png")
        .line
          img(src="../../img/dest/mline.png")

        li.m3o(data-id='1')
            router-link.hash.custom(data-ga="product",data-href="", to="./product") 
              img.ico(src="../../img/dest/m-ico3.png")
              img(src="../../img/dest/m3.png")
        .line
          img(src="../../img/dest/mline.png")
        li.m4o(data-id='1')
            router-link.hash.custom(data-ga="rule",data-href="", to="./rule") 
              img.ico(src="../../img/dest/m-ico4.png")
              img(src="../../img/dest/m4.png")
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