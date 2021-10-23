<template lang="pug">
    section.post-list
      BasePostPreview(
          v-for="post in prPosts"
          :key="post.id"
          :id="post.id"
          :imageName="post.imageName"
          :title="post.title"
          :previewText="post.previewText"
          :is-admin="isAdmin"
          )
</template>

<script>
import BasePostPreview from "./BasePostPreview";

export default {
  name: "ThePostList",
  components: {
    BasePostPreview,
  },
  props: {
    isAdmin: { type: Boolean, default: false },
  },
  computed: {
    prPosts() {
      return this.$store.getters.prPosts;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";

.post-list {
  width: 100%;

  @include Flexer(flex, row, center, center);
  flex-wrap: wrap;
}
</style>
