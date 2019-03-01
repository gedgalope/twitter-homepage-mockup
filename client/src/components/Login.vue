<template>
  <div class="Login">
    <v-card 
      max-width="300"
      max-height="350"
      min-width="300"
      min-height="350" 
    >
      <v-container>
        <v-layout column>
          <v-flex>
            <v-text-field v-model="username" box placeholder="Username"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              v-model="password"
              box
              placeholder="Password"
              :append-icon="this.showPassword ? 'visibility_off' : 'visibility'"
              :type="this.showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn block color="#00E676" round class="btn-login" @click="login"> Login </v-btn>
          </v-flex>
          <v-flex>
            <v-btn block color="#B9F6CA" round class="btn-signup" @click="goSignup"> Signup </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <p v-if="userCredentials == {}">no data</p>
      <p v-else>{{userCredentials}}</p>
    </v-card>
    <sign-up></sign-up>
  </div>
</template>

<script>
import Signup from './Signup'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      showPassword:false,
      username: "",
      password: "",
      show: false,
    };
  },
  mounted() {
    // this.loadCredentials;
  },
  components:{
    "sign-up":Signup
  },
  computed: {
    ...mapState({
      userCredentials: state =>  state.UserData.userCredentials
    }),
    ...mapActions({
      loadCredentials: 'getData'
    })
  },
  methods: {
    ...mapMutations({
      goSignup : 'dialogState'
    }),
    login(){
      // alert("username: " + this.username + "\n" +"password: " + this.password);
      this.$store.dispatch('getData', this.username);
      // alert(JSON.stringify(this.userCredentials));
      if(this.username == this.userCredentials.username 
          && this.password == this.userCredentials.password){
            this.username="";
            this.password="";
        alert('yey');
      }else{
        alert('nopes');
      }
    }
  },
};
</script>

<style scoped>
</style>

