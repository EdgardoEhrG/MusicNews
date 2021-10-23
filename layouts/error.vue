<template lang="pug">
    div.err-container
        h1 Oops... Error Page
        nuxt-link(to="/" tag="a") Back to safety
</template>

<script>
export default {
  head: {
    title: "404",
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";

.err-container {
  @include Flexer(flex, column, center, center);

  h1 {
    text-align: center;
  }

  a {
    margin-top: 30px;
    padding: 8px;

    font-size: 28px;

    color: black;

    &:hover {
      color: grey;
    }
  }
}
</style>
