/* eslint-disable */
import posts from '../../api/posts'
const state = {
  userPosts:[]
}

const getters = {

}

const mutations = {
  SET_USER_POST(state,payload){
    state.userPost = payload;
  }
}

const actions = {
  async getUserPosts({commit}){
    let userPost = await posts.getPost();
    commit('SET_USER_POST',userPost);
  },
  async newPost({commit},newUserPost){
    await posts.addPost(newUserPost);
    let updatedFeed = await posts.getPost();
    commit('SET_USER_POST', updatedFeed);
  },
  async deleteUserPost({commit},id){
    await posts.deletePost(id);
    let updatedFeed = await posts.getPost();
    commit('SET_USER_POST', updatedFeed);    
  },
  async editUserPost({commit},id){
    await posts.updatePost(id);
    let updatedFeed = await posts.getPost();
    commit('SET_USER_POST', updatedFeed);
  }
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}