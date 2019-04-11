<template>
  <div class="NewPost">
    <v-card color="">
      <v-form>
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
                  <v-btn color="#26A69A" :disabled="disable()" round @click="postText()">Bark!</v-btn>
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
export default {
  name: "NewPost",
  data() {
    return {
      postText: ""
    };
  },
  methods: {
    disable() {
      if (this.postText.length >= 140) {
        return true;
      } else {
        return false;
      }
    },
    postText(){
      
    },
    uploadGIF(){

    },
    uploadaImage(){

    }
  }
};
</script>

<style scoped>
</style>
