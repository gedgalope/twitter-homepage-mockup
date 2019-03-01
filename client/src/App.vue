<template>
  <v-app :style="{backgroundImage: 'url(http://www.ucatx.cat/wallpic/full/83/836170/whatsapp-chat-wallpaper-hd.jpg)'}">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
