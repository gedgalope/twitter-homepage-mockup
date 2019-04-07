<template>
  <div class="Tolbar">
    <v-toolbar 
      app
      color="#212121"
      dark
    >
      <v-toolbar-title>
        <v-icon large >mdi-account-alert-outline</v-icon>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field 
        v-model="search"
        solo
        clearable
        append-outer-icon="mdi-magnify"
        placeholder="Search.."
        style="width:100px;"
        @click:append-outer="searchPerson"
      >

      </v-text-field>
    </v-toolbar>
  </div>
</template>

<script>
import {  mapMutations } from "vuex";
export default {
  name: "Toolbar",
  data(){
    return{
      search:''
      }
  },
  methods: {
    searchPerson(){
      if(this.search==''||this.search==' '){
        return
      }else{
        return
      }
    },
    ...mapMutations({})
  },
};
</script>

<style scoped>
</style>


