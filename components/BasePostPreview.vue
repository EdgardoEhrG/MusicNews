<template lang="pug">
    nuxt-link(:to="postLink" tag="a")
        article.post-preview
            div.post-thumbnail
              img(:src="imageName" alt="musician")
            div.post-content
              h1 {{ title }}
              p {{ previewText }}
</template>

<script>
export default {
    name: 'BasePostPreview',
    props: {
        imageName: {type: String, required: true},
        title: {type: String, required: true},
        previewText: {type: String, required: true},
        isAdmin: {type: Boolean, required: true},
        id: {type: String, required: true}
    },
    computed: {
      postLink () {
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
      }
    }
}
</script>

<style lang="scss" scoped>

a {
    margin: 20px;

    color: black;

    .post-preview {
        display: inline-flex;
        flex-direction: column;

        padding: 20px;

        border: 1px solid grey;

        .post-thumbnail {
            img {
              width: 400px;
            }
        }
    }
}

</style>


