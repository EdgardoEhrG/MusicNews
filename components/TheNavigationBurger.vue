<template lang="pug">
    div.burger-container(:class="{active: isActive}" @click="click")
        - var x = 3
        div.burger
          - for (var i = 1; i <= x; i++) {
            span
          - }
        div.cross
          - for (var i = 1; i <= x; i++) {
            span
          - }
</template>

<script>
export default {
  name: 'TheNavigationBurger',
  data () {
      return {
          isActive: false
      }
  },
  methods: {
    click () {
      this.isActive = !this.isActive
      this.$store.dispatch('TOSHOW', this.isActive)
    }
  }
}
</script>

<style lang="scss" scoped>

* {
  transition: .25s;
}

span {
  display:block;
  background:#566973;
  border-radius:2px;
}

.burger-container {
  width:100px;
  height:100px;

  display: none;

  position:relative;

  margin: -20px;

  border-radius:5px;

  background:rgba(255,255,255,.4);

  cursor:pointer;

  transform: scale(0.5);

  &:hover {
    background:rgba(255,255,255,.8);
  }

  @media screen and (max-width: 1300px) {
    display: inline-flex;
  }

  .burger{
    height:100%;
    width:100%;

    position:absolute;

    span {
      width:60px;
      height:4px;

      position:relative;
      top:24px;
      left:20px;

      margin:10px 0;

      &:nth-child(1){
        transition-delay:.5s;
      }

      &:nth-child(2){
        transition-delay:.625s;
      }

      &:nth-child(3){
        transition-delay:.75s;
      }

    }
  }
  .cross {
    height:100%;
    width:100%;
    position:absolute;

    transform:rotate(45deg);

    span{
      &:nth-child(1){
        height:0%;
        width:4px;

        position:absolute;
        top:10%;
        left:48px;

        transition-delay:0s;
      }

      &:nth-child(2){
        width:0%;
        height:4px;

        position:absolute;
        left:10%;
        top:48px;

        transition-delay:.25s;
      }
    }
  }
}

.active {
  .burger {
    span {
      width:0%;

      &:nth-child(1){
        transition-delay:0s;
      }

      &:nth-child(2){
        transition-delay:.125s;
      }

      &:nth-child(3){
        transition-delay:.25s;
      }
    }
  }

  .cross {
    span {
      &:nth-child(1){
        height:80%;

        transition-delay:.625s;
      }
    }
    span {
      &:nth-child(2){
        width:80%;
        
        transition-delay:.375s;
      }
    }
  }
}

</style>


