<template lang="pug">
    main.admin-post-page
      section.new-post-form
        TheNewPostForm(@submit="onSubmitted")
</template>

<script>
import TheNewPostForm from "../../components/TheNewPostForm";

export default {
  layout: "admin",
  head: {
    title: "New Post",
  },
  middleware: ["check-auth", "auth"],
  components: {
    TheNewPostForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("ADD_POST", postData);
      this.$router.push("/admin");
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-post-page {
  padding-top: 20px;
}
</style>
