<template lang="pug">
  main.main
    ThePostList
</template>

<script>
// Components
import ThePostList from "../components/ThePostList"

export default {
  head: {
    title: 'Home'
  },
  components: {
    ThePostList
  }
}
</script>

<style lang="scss" scoped>
</style>
