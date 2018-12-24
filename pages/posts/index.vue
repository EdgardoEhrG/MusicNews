<template lang="pug">
    section.container
        h1 Posts Page
</template>

<script>
export default {
  head: {
    title: 'Posts'
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/styles/_mixins.scss";

.container {
  width: 100%;
  min-height: 100%;

  @include Flexer(flex, column, space-between, stretch);

  h1 {
    text-align: center;
  }
}

</style>


