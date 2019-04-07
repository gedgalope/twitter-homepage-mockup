<template>
  <div class="Login">
    <v-card max-width="300" max-height="420" min-width="300" min-height="350">
      <v-container>
        <v-layout column>
          <v-form ref="form">
            <v-flex>
              <v-text-field v-model="signInCredentials.username" box placeholder="Username"></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="signInCredentials.password"
                box
                placeholder="Password"
                :append-icon="this.showPassword ? 'visibility_off' : 'visibility'"
                :type="this.showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-flex>
            <p class="caption" style="color:red;" v-if="loginErr">Invalid username or/and password</p>
            <v-flex>
              <v-btn block color="#00E676" round class="btn-login" @click="login">GO</v-btn>
            </v-flex>
            <v-flex>
              <button-fb @click="signIn('fb')">Sign in using Facebook</button-fb>
            </v-flex>
            <v-flex>
              <button-google @click="signIn('google')">Sign in using Google</button-google>
            </v-flex>
            <divider-text>OR</divider-text>
            <v-flex>
              <v-btn block color="#B9F6CA" round class="btn-signup" @click="goSignup">Signup</v-btn>
            </v-flex>
          </v-form>
        </v-layout>
      </v-container>
      <p v-if="userCredentials == {}">no data</p>
      <p v-else>{{userCredentials}}</p>
    </v-card>
    <sign-up></sign-up>
  </div>
</template>

<script>
import ButtonFB from "./ButtonFB";
import ButtonGoogle from "./ButtonGoogle";
import DividerText from "./DividerText.vue";
import Signup from './Signup'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      showPassword:false,
      loginErr:false,
      signInCredentials:{
        username: "",
        password: ""
      },
      show: false,
    };
  },
  components:{
    "sign-up":Signup,
    "button-fb": ButtonFB,
    "button-google": ButtonGoogle,
    "divider-text": DividerText
  },
  computed: {
    ...mapState({
      userCredentials: state =>  state.UserData.userCredentials
    }),
    
  },
  methods: {
    ...mapMutations({
      goSignup : 'dialogState',
    }),
    ...mapActions({
      loadCredentials: 'getData',
      socialMedAuth: "postData"
    }),
    login(){
      alert("username: " + this.signInCredentials.username + "\n" +"password: " + this.signInCredentials.password);
      this.$store.dispatch('getData', this.signInCredentials);
      // this.loadCredentials(this.signInCredentials);
      alert(JSON.stringify(this.userCredentials));
      if(this.username == this.userCredentials.username 
          && this.password == this.userCredentials.password){
            this.username="";
            this.password="";
        alert('yey');
        this.loginErr=false;
      }else{
        alert('nopes');
        this.loginErr=true;
        this.$refs.form.reset();
      }
    },
    signIn(method){
      if(method == 'google'){
        this.socialMedAuth({
          name: "",
          lastname: "",
          username: "",
          password: "",
          method:"google"
      });
      }else{
        this.socialMedAuth({
          name: "",
          lastname: "",
          username: "",
          password: "",
          method:"facebook"
      });
      }
    }
  },
};
</script>

<style scoped>
</style>

