<template lang="pug">
    div.admin-post-page
      section.update-form
        TheNewPostForm(:post="this.loadedPost" @submit="onSubmitted")
</template>

<script>
// Libraries
import axios from 'axios'

// Components
import TheNewPostForm from "../../components/TheNewPostForm"

export default {
  layout: 'admin',
  components: {
    TheNewPostForm
  },
  asyncData (context) {
    return axios.get('https://music-news-cdc05.firebaseio.com/posts/' + context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(err => context.error(err))
  },
  methods: {
    onSubmitted (editedPost) {
      this.$store.dispatch('EDIT_POST', { ...editedPost, id: this.$route.params.postId })
      this.$router.push('/admin');
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-post-page {
  padding-top: 20px;
}

</style>