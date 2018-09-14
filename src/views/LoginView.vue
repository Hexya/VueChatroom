<template>
    <div>
        <LoginForm @submit="onFormSubmit"/>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm';
import store from '../store';

export default {
  components: {
    LoginForm,
  },
  methods: {
    onFormSubmit(username, avatar) {
      this.$api.userRegister(username, avatar).then((user) => {
        store.user = user;
        this.$router.push('/');
      });
    },
  },
};
</script>
