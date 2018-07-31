<style lang="less" src="all.less"></style>
<template lang="pug">
#app.app
    
  Navigation
  Loading_page
  transition(name="fade" mode="out-in")
    router-view
  
</template>

<script>

import Loading_page from './Loading_page.vue';
import Navigation from './Navigation.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    Loading_page,
    Navigation,
    
  },
};
</script>

