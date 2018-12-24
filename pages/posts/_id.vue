<template lang="pug">
    div.container
      header.header
        h1 Post Page
      main.main
        h2 Title of the post
        h3 Last updated on ? <br> Written by ?
        p Text ...
        p.links Links ...
      footer.footer
        p 2018 ...
</template>

<script>
export default {
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


