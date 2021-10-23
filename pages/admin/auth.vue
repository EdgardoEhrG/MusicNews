<template lang="pug">
    div.auth-container
      form(@submit.prevent="onSubmit")
        input(type="email" placeholder="Enter your e-mail" v-model="email" required)
        input(type="password" placeholder="Enter your password" v-model="password" required)
        div.buttons
          button(type="submit") {{ isLogin ? 'Login' : 'Sign Up' }}
          button(@click="isLogin = !isLogin") Switch to {{ isLogin ? 'Sign Up' : 'Log In'}}
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("AUTHENTICATE_USER", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/admin");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  width: 100%;

  display: flex;
  justify-content: center;

  form {
    width: 400px;

    display: flex;
    flex-direction: column;

    padding: 10px;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
      padding: 10px;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin-top: 5px;

      button {
        padding: 10px;
      }
    }
  }
}
</style>
