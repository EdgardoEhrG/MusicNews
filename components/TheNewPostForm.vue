<template lang="pug">
    form.form(@submit.prevent="onSave")
      label Author Name #[input(type="text" v-model="editedPost.author" placeholder="Enter your name")]
      label Title #[input(type="text" v-model="editedPost.title" placeholder="Enter title of post")]
      label Preview Text #[input(type="text" v-model="editedPost.previewText" placeholder="Enter preview text of post")]
      label Image File #[input(type="text" v-model="editedPost.imageName" placeholder="Enter image url")]
      label Content #[textarea(v-model="editedPost.content" rows="10" maxlenght="1000" placeholder="Enter smt")]
      div.buttons
        button.save(type="submit") Save
        button.cancel(@click="onCancel") Cancel
</template>

<script>
export default {
  name: 'TheNewPostForm',
  props: {
    post: {type: Object, required: false, default: function () { return { author: '', title: '', imageName: '', content: '', previewText: '' } }}
  },
  data () {
    return {
      editedPost: { ...this.post }
    }
  },
  methods: {
    onSave () {
      this.$emit('submit', this.editedPost)
      this.$router.push('/admin')
      // console.log(this.editedPost)
    },
    onCancel () {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../assets/styles/_mixins.scss";

.form {
    @include Flexer(flex, column, center, center);

    label {
        @include Flexer(flex, column, center, center);

        input, textarea {
            width: 400px;

            margin: 10px;
            padding: 20px;

            font-size: 13px;

            outline: none;
            border: none;

            &::placeholder {
                font-size: 13px;

                color: darkgrey;
            }
        }
    }

    .buttons {
      width: 200px;

      @include Flexer(flex, row, space-between, center);

      margin-top: 10px;

      button {
        padding: 10px;

        font-size: 12px;
        color: white;

        border: none;
        outline: none;
      }

      .save {
        background-color: red;
      }

      .cancel {
        background-color: black;
      }
    }
}

</style>


