<template lang="pug">
    div.container
      header.header
        h1 Post Page
      main.main
        h2 {{ loadedPost.title }}
        h3 Last updated on {{ loadedPost.updatedDate }} <br> Written by {{ loadedPost.author }}
        p Text {{ loadedPost.content }}
      footer.footer
        p 2018 ...
</template>

<script>
// Libraries
import axios from 'axios'

export default {
  asyncData (context) {
    return axios.get('https://music-news-cdc05.firebaseio.com/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(err => context.error(err))
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/styles/_mixins.scss";

.container {
  width: 100%;
  min-height: 100%;

  @include Flexer(flex, column, space-between, stretch);

  .header {
    h1 {
      text-align: center;
    }
  }

  .main, .footer {
    text-align: center;
  }
}

</style>


