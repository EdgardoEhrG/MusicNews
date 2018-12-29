<template lang="pug">
    section.container
      ThePostList
</template>

<script>
// Components
import ThePostList from "../../components/ThePostList"

export default {
  head: {
    title: 'Posts'
  },
  components: {
    ThePostList
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/styles/_mixins.scss";

.container {
  width: 100%;

  padding: 10px;

  @include Flexer (flex, column, flex-start, center);
}

</style>


