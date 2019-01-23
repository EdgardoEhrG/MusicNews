<template lang="pug">
    main.admin-page
      section.new-post
        button(@click="$router.push('/admin/new-post')") Create Post #[i(class="fa fa-plus-square" aria-hidden="true")]
      section.existing-posts
        h1 Existing Posts
        ThePostList(isAdmin)
</template>

<script>
// Components
import ThePostList from "../../components/ThePostList"

export default {
  layout: 'admin',
  head: {
    title: 'Admin Page'
  },
  components: {
    ThePostList
  },
  created () {
    this.$store.dispatch('NUXT_SERVER_INIT')
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/styles/_mixins.scss";

.admin-page {
  width: 100%;

  @include Flexer(flex, column, center, center);

  padding-top: 20px;

  .new-post {
    button {
      padding: 10px;

      font-size: 30px;

      color: white;

      border: none;
      border-radius: 8px;

      background: #ADA996;

      cursor: pointer;

      &:hover {
        color: antiquewhite;

        transition: .4s;
      }
    }
  }

  .existing-posts {
    h1 {
      margin-top: 10px;

      text-align: center;
    }
  }
}

</style>




