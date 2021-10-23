<template lang="pug">
    header.header
      div.h-container
        TheNavigationBurger
        h1 Get the latest music news
        nav.links
          nuxt-link(to="/admin" tag="a") Admin
          nuxt-link(to="/posts" tag="a") Posts
          nuxt-link(to="/about" tag="a") About
      TheMobileMenu
</template>

<script>
import TheMobileMenu from "./TheMobileMenu";

export default {
  name: "TheHeader",
  components: {
    TheMobileMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";

.header {
  @include Flexer(flex, row, flex-start, center);

  padding: 20px;

  color: white;

  background: #232526;
  background: linear-gradient(to right, #414345, #232526);

  .h-container {
    width: 100%;

    @include Flexer(flex, row, space-between, center);

    h1 {
      font-family: "Work Sans", sans-serif;

      text-align: center;
    }

    nav {
      a {
        margin: 5px;

        color: white;

        &:hover {
          color: grey;
        }

        &:active {
          color: red;
        }
      }

      .nuxt-link-active {
        color: red;
      }
    }

    .links {
      font-family: "Work Sans", sans-serif;

      @media screen and (max-width: 1300px) {
        display: none;
      }
    }
  }
}
</style>
