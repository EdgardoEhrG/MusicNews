<template lang="pug">
    main.admin-post-page
      section.new-post-form
        TheNewPostForm
</template>

<script>
// Components
import TheNewPostForm from "../../components/TheNewPostForm"

export default {
  layout: 'admin',
  head: {
    title: 'New Post'
  },
  components: {
    TheNewPostForm
  }
}
</script>

<style lang="scss" scoped>

.admin-post-page {
  padding-top: 20px;
}

</style>


