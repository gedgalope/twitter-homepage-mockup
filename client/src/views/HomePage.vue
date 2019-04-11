<template>
  <div class="HomePage">
    <v-container>
      <v-layout>
        <v-flex>
          <new-post></new-post>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import NewPost from "../components/Home/NewPost";
export default {
  name: "HomePage",
  components: {
    "new-post": NewPost
  }
};
</script>

<style scoped>
</style>

