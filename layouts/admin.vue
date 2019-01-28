<template lang="pug">
  div.space
    nuxt
</template>

<script>
export default {
}
</script>


<style lang="scss">

@import "../assets/styles/_mixins.scss";

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
