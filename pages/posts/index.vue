<template lang="pug">
    section.container
      ThePostList
</template>

<script>
import ThePostList from "../../components/ThePostList";

export default {
  head: {
    title: "Posts",
  },
  components: {
    ThePostList,
  },
  created() {
    this.$store.dispatch("NUXT_SERVER_INIT");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_mixins.scss";

.container {
  width: 100%;

  padding: 10px;

  @include Flexer(flex, column, flex-start, center);
}
</style>
