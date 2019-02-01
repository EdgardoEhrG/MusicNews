<template lang="pug">
    main.admin-post-page
      section.new-post-form
        TheNewPostForm(@submit="onSubmitted")
</template>

<script>
// Libraries
import axios from 'axios'

// Components
import TheNewPostForm from "../../components/TheNewPostForm"

export default {
  layout: 'admin',
  head: {
    title: 'New Post'
  },
  middleware: ['auth'],
  components: {
    TheNewPostForm
  },
  methods: {
    onSubmitted (postData) {
      this.$store.dispatch('ADD_POST', postData)
      this.$route.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-post-page {
  padding-top: 20px;
}

</style>


