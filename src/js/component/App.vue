<style lang="less" src="all.less"></style>
<template lang="pug">
#app.app

  canvas_Pixi
  .frame.abs
    
  Navigation
  Loading_page
  transition(name="fade" mode="out-in")
    router-view
  
  footerComp

</template>

<script>

import Loading_page from './Loading_page.vue';
import Navigation from './Navigation.vue';
import footerComp from './footerComp.vue';
import canvas_Pixi from './canvas_Pixi.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    Loading_page,
    Navigation,
    footerComp,
    canvas_Pixi,
  },
};
</script>

