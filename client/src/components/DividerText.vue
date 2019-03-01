<template>
   <!-- <v-divider class="divider-style"></v-divider>  -->
     <hr class="divider-style" data-content="OR">

</template>

<script>
export default {
  name:'DividerText',
}
</script>

<style scoped>
.divider-style {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .5;
  }
.divider-style::before {
    content: '';
    /* // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar */
    background: linear-gradient(to right, transparent, #424242, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
}
.divider-style::after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 .5em;
    line-height: 1.5em;
    /* // this is really the only tricky part, you need to specify the background color of the container element... */
    color: #424242;
    background-color: #fcfcfa;
}
</style>
