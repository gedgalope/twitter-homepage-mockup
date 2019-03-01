<template>
<body background="http://www.ucatx.cat/wallpic/full/83/836170/whatsapp-chat-wallpaper-hd.jpg">
  <div class="LoginPage">
    <v-container d-block>
      <v-layout column align-end>
        <v-flex offset-lg-10>
          <log-in></log-in>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</body>
</template>

<script>
import Login from "../components/Login";
export default {
  name: "LoginPage",
  components: {
    "log-in": Login
  }
};
</script>

<style scoped>
</style>
