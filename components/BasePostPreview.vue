<template lang="pug">
    nuxt-link(:to="'/posts/' + id" tag="a")
        article.post-preview
            div.post-thumbnail
              img(:src="require('../static/images/' + imageUrl)" alt="singer")
            div.post-content
              h1 Post title
              p Preview text
</template>

<script>
export default {
    name: 'BasePostPreview',
    props: {
        id: {type: Number, required: true},
        imageUrl: {type: String, required: true}
    }
}
</script>

<style lang="scss" scoped>

a {
    color: black;

    .post-preview {
        display: inline-flex;
        flex-direction: column;

        padding: 20px;
        margin: 20px;

        border: 1px solid grey;

        .post-thumbnail {
            img {
              width: 400px;
            }
        }
    }
}

</style>


