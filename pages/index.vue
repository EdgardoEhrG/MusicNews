<template lang="pug">
  div.home-page
    header.header
      h1 Get the latest music news
    main.main
      section.featured-posts
        BasePostPreview(imageUrl="Ariana.jpg" :id="1")
        BasePostPreview(imageUrl="Kendrick.jpg" :id="2")
        BasePostPreview(imageUrl="Drake.jpg" :id="3")
    footer
      p 2018
</template>

<script>
// Components
import BasePostPreview from "../components/BasePostPreview"

export default {
  head: {
    title: 'Home'
  },
  components: {
    BasePostPreview
  }
}
</script>

<style lang="scss" scoped>

@import "../assets/styles/_mixins.scss";

.home-page {
  width: 100%;
  min-height: 100%;

  @include Flexer(flex, column, space-between, stretch);

  .header {
    h1 {
      text-align: center;
    }
  }

  .main {
    .featured-posts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      padding: 0 30px;
    }
  }
}

</style>
