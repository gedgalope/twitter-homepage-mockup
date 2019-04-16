<template>
  <div class="NewPost">
    <v-card color="">
      <v-form ref="form">
        <v-card-actions>
          <v-layout column>
            <v-flex>
              <v-layout>
                <v-textarea
                  label="What's up right now??"
                  outline
                  no-resize
                  :counter="140"
                  v-model="postText"
                ></v-textarea>
              </v-layout>
            </v-flex>
            <v-flex>
              <!-- <v-container> -->
              <v-layout row>
                <v-flex shrink>
                  <v-btn icon @click="uploadGIF()">
                    <v-icon>mdi-gif</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex shrink>
                  <v-btn icon @click="uploadImage()">
                    <v-icon>mdi-folder-image</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex grow>
                  <v-btn color="#26A69A" :disabled="disable()" round @click="submmitPost()">Bark!</v-btn>
                </v-flex>
              </v-layout>
              <!-- </v-container> -->
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "NewPost",
  data() {
    return {
      postText: ""
    };
  },
  computed: {
    ...mapState({
      userCred:state=>state.UserData.userCredentials
    })
  },
  methods: {
      /*eslint-disable*/

    ...mapActions({
      submmitNewPost:'userProfileFeed/newPost'
    }),
    disable() {
      if (this.postText.length >= 140) {
        return true;
      } else {
        return false;
      }
    },
    submmitPost(){
      console.log(this.postText);
      this.submmitNewPost({
        text:this.postText,
        userId:this.userCred.userId
      });
      this.postText="";
      // this.$refs.form.reset();
    },
    uploadGIF(){

    },
    uploadImage(){

    }
  }
};
</script>

<style scoped>
</style>
