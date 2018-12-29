<template lang="pug">
    main.admin-post-page
      section.new-post-form
        TheNewPostForm
</template>

<script>
// Components
import TheNewPostForm from "../../components/TheNewPostForm"

export default {
  head: {
    title: 'New Post'
  },
  components: {
    TheNewPostForm
  }
}
</script>

<style lang="scss" scoped>
</style>


