<template lang="pug">
    div.mobile-menu(:class="{show: isShow}")
      nav
        nuxt-link(to="/") #[i(class="fa fa-home" aria-hidden="true")]
        nuxt-link(to="/posts") #[i(class="fa fa-newspaper-o" aria-hidden="true")]
        nuxt-link(to="/about") #[i(class="fa fa-info-circle" aria-hidden="true")]
        nuxt-link(to="/admin") #[i(class="fa fa-user-circle" aria-hidden="true")]
</template>

<script>
export default {
  name: "TheMobileMenu",
  computed: {
    isShow() {
      return this.$store.getters.statusMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";

.mobile-menu {
  width: 0px;

  @include Flexer(none, row, center, stretch);

  position: absolute;
  top: 200px;
  left: 0;

  background: #414345;

  nav {
    @include Flexer(flex, column, flex-start, center);

    a {
      margin: 10px 0;

      font-size: 30px;

      color: white;

      cursor: pointer;

      &:hover {
        color: antiquewhite;

        transition: 0.5s;
      }
    }
  }
}

.show {
  width: 70px;

  display: flex;
}
</style>
