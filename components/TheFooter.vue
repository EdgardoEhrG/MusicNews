<template lang="pug">
    footer.footer
        p 2018
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>

.footer {
    padding: 20px;

    background: #232526;
    background: linear-gradient(to right, #414345, #232526);

    p {
        font-family: 'Work Sans', sans-serif;

        color: white;
        text-align: center;
    }
}

</style>

