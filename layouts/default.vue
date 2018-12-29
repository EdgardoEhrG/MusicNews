<template lang="pug">
  div.space
    TheHeader
    nuxt
    TheFooter
</template>

<script>
// Components
import TheHeader from "../components/TheHeader"
import TheFooter from "../components/TheFooter"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style lang="scss">

@import "../assets/styles/_mixins.scss";

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  font-family: 'Work Sans', sans-serif;

  text-decoration: none;
}

html, body, #__nuxt, #__layout {
  width: 100%;
  height: 100%;

  background: #ADA996;
  background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
}

.space {
  width: 100%;
  min-height: 100%;

  @include Flexer(flex, column, space-between, stretch);
}

</style>
