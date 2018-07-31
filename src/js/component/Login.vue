<style lang="stylus"></style>

<template lang="pug">
.login-root
  .page-header
    h1 Index Page
        small Subtext for header
  .card
    .card-block
      .card-title
        h1 login
      .form-group
        label Email
        input.form-control(type="email" , v-model="email")
      .form-group
        label Password
        input.form-control(type="password" , v-model="password")
      button.btn.btn-primary(@click="submitHandler") Submit
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    submitHandler() {
      const { email, password } = this;
      this.login({ email, password }).then((res)=>{
        if (res.status === 'ok') {
        const redirect = this.$route.query.redirect || '/';
        this.$router.replace(redirect);
      }
      });
      
    },
  },
};
</script>