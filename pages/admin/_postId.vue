<template lang="pug">
    div.admin-post-page
      section.update-form
        TheNewPostForm(:post="this.loadedPost" @submit="onSubmitted")
</template>

<script>
import axios from "axios";

import TheNewPostForm from "../../components/TheNewPostForm";

export default {
  layout: "admin",
  components: {
    TheNewPostForm,
  },
  middleware: ["check-auth", "auth"],
  asyncData(context) {
    return axios
      .get(process.env.baseUrl + "/posts/" + context.params.postId + ".json")
      .then((res) => {
        return {
          loadedPost: res.data,
        };
      })
      .catch((err) => context.error(err));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("EDIT_POST", {
        ...editedPost,
        id: this.$route.params.postId,
      });
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
