<template>
  <v-app :style="{backgroundImage: 'url(http://www.ucatx.cat/wallpic/full/83/836170/whatsapp-chat-wallpaper-hd.jpg)'}">
    <toolbar></toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './views/Toolbar';
export default {
  name: 'App',
  components: {
    'toolbar':Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
