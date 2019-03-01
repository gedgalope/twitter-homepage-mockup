<template>
  <v-btn class="white--text text-transform-none" v-on="btnListeners" large flat block round>
    <icon class="mr-2" icon-name="facebook logo" viewBox="0 0 32 32">
      <icon-facebook/>
    </icon>
    <span>
      <slot/>
    </span>
  </v-btn>
</template>

<script>
import IconFacebook from '../icons/IconFacebook';
import Icon from './Icon';
export default {
  name:"ButtonFB",
  components:{
    'icon':Icon,
    'icon-facebook':IconFacebook
  },
  computed: {
    btnListeners() {
      return Object.assign({}, this.$listeners);
    }
  }
};
</script>

<style scoped>
.v-btn {
  background-color:#3b5998;
  font-size: 14px;
  font-weight: 500;
}
</style>