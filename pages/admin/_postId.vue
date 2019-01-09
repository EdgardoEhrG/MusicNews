<template lang="pug">
    div.admin-post-page
      section.update-form
        TheNewPostForm(:post="this.loadedPost")
</template>

<script>
// Components
import TheNewPostForm from "../../components/TheNewPostForm"

export default {
  layout: 'admin',
  components: {
    TheNewPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Smb',
        title: 'Text',
        imageName: 'Smt',
        content: 'Text2'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-post-page {
  padding-top: 20px;
}

</style>