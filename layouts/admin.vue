<template lang="pug">
  div.space
    nuxt
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/_mixins.scss";

html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;

  background: #ada996;
  background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996);
}

.space {
  width: 100%;
  min-height: 100%;

  @include Flexer(flex, column, space-between, stretch);
}
</style>
