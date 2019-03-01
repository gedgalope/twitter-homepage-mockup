<template>
  <v-btn class="white--black" v-on="btnListeners" large flat block round outline>
    <icon class="mr-2" icon-name="google logo" viewBox="0 0 32 32" width="32" height="32">
      <icon-google/>
    </icon>
    <span>
      <slot/>
    </span>
  </v-btn>
</template>

<script>
import IconGoogle from '../icons/IconGoogle';
import Icon from './Icon';
export default {
  name:"ButtonFB",
  components:{
    'icon':Icon,
    'icon-google':IconGoogle
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
  font-size: 14px;
  font-weight: 500;
}
</style>