import api from "./api"

export default {
  /*eslint-disable no-console*/
  addPost(post) {
    console.log('vuex to api ' + post);
    return api().post('/home/post',post);
  },
  getPost(post) {
    return api().get('/home/:post', post);
  },
  updatePost(id){
    return api().put('/home/update/:id',id);
  },
  deletePost(id){
    return api().put('/home/:id' , id);
  }
}