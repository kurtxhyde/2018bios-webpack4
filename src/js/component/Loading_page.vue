<style lang="less" src="loading.less" scoped></style>
<template lang="pug">

transition( :duration="{ enter:50, leave: 1000 }" ,name='fade', mode='out-in')
  .loading(v-show='showPageLoading')
    .center
      .bg
      .ld
        //- img(src="../../img/common/ring.gif")
        .txt.relat.inv {{percentLoading}}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['showPageLoading','percentLoading']),
  },
};
</script>