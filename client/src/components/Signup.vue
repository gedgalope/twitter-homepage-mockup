<template>
  <div class="Signup">
    <v-dialog persistent v-model="dialogStatus" max-width="600px">
      <v-card style="width:600px;">
        <v-btn flat depressed small fab @click="close" style="float:right;">
          <v-icon medium>mdi-close</v-icon>
        </v-btn>
        <br>
        <br>
        <v-container d-block>
        <v-layout justify-space-around column>
          <v-flex align-self-center><h1>Create an Account</h1></v-flex>
          <v-flex align-self-center v-if="missingField"><p class="body-1 red--text">Fill out empty fields</p></v-flex>
        </v-layout>
        </v-container>
          <v-container d-block>
            <v-layout column d-block>
              <v-flex>
                <v-text-field
                  full-width
                  v-model="firstname" 
                  box 
                  label="Name: " 
                  class="text-field"
                  :rules="nameRules"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="lastname" 
                  box
                  label="Last Name: " 
                  class="text-field"
                  :rules="nameRules"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="username" 
                  box 
                  label="Username: " 
                  class="text-field"
                  :rules="usernameRules"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="password"
                  box
                  label="Password: "
                  :append-icon="this.showPassword ? 'visibility_off' : 'visibility'"
                  :type="this.showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  class="text-field"
                  :rules="passwordRules"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-btn 
                  round 
                  flat 
                  block
                  @click="createAccount()"
                  style="background-color:#00E676; font-size: 17px; font-weight: 500; color:white; padding:4%;">
                  <v-icon color = "white">mdi-clipboard-account</v-icon>
                  Sign in
                </v-btn>
              </v-flex>
                <divider-text></divider-text>
              <v-flex>
                <button-fb>Continue Using Facebook</button-fb>
                <button-google>Continue Using Google</button-google>
              </v-flex>
            </v-layout>
          </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ButtonFB from './ButtonFB';
import ButtonGoogle from './ButtonGoogle';
import DividerText from './DividerText.vue';

export default {
  name: "Signup",
  data() {
    return {
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      showPassword: false,
      missingField:false,
      nameRules: [v => !!v || 'Name is required'],
      usernameRules: [v => !!v || 'USERNAME is required'],
      passwordRules: [v=>v.length>=6 || 'minimum 6 characters' ]
    };
  },
  components:{
    'button-fb':ButtonFB,
    'button-google':ButtonGoogle,
    'divider-text':DividerText
  },
  methods: {
    ...mapMutations({
      close: "dialogState"
    }),
    ...mapActions({
      SIGN_UP: "postData"
    }),
    createAccount(){
      var newAccObj={
        name:this.firstname,
        lastname:this.lastname,
        username:this.username,
        password:this.password
      };
      var array = Object.values(newAccObj);
      alert(array);
      for(var i=0; i < array.length; i++){
        if(array[i]=='' || array[i]==null){
          this.missingField=true;
          alert(i + 'missing: ' + array[i]);
          break;
        }else{
          this.missingField=false;
        }
      }
      if(!this.missingField){
        alert(JSON.stringify(newAccObj));
        this.SIGN_UP(newAccObj);
        this.close();
        this.firstname=''
        this.lastname=''
        this.username=''
        this.password=''
      }
    }
  },
  computed: {
    ...mapState({
      dialogStatus: state => state.storeMisc.signupDialog
    })
  }
};
</script>

<style scoped>
/* .text-field {
  width: 500px;
} */
</style>

