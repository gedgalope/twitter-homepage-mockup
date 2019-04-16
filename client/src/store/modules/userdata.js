/* eslint-disable*/

// const axios = require('axios');
import user from '../../api/user'
const firebase = require('firebase');


// const axiosConfig = {
//   baseURL: 'http://localhost:3000',
// };

// const AXIOS = axios.create(axiosConfig);

const state = {
  userCredentials: {},
  newCredentials: {},
  foundCred: true,
  loggedIn:false
}

const getters = {

}

const mutations = {
  SET_USER_CREDENTIALS(state, payload) {
    if (payload.data == null) {
      state.foundCred = false;
    }
    else {
      state.foundCred = true;
      state.userCredentials = payload.data
    }
  },
  CHANGE_LOGIN_STATE(state){
    state.loggedIn=!state.loggedIn;
  }
}

const actions = {
  // getData({commit}){
  //     axios.get('/all')
  //     .then(r => r.data)
  //     .then(userCredentials => {
  //         commit('SET_USER_CREDENTIALS',userCredentials)
  //     })
  // }

  async getData({ commit }, userCredentials) {
    // async getData({ commit }) {

    try {
      const data = await user.getUser(userCredentials.username);
      // const data = await HTTP.get('/all');
      console.log(userCredentials.username);
      firebaseLoginUser(userCredentials)
      commit('SET_USER_CREDENTIALS', data);
    } catch (error) {
      throw (error);
    }
  },

  async postData({ commit }, dataObj) {
    console.log(dataObj);
    try {
      console.log(JSON.stringify(dataObj));
      
      let credentials = await firebaseCreateUser(dataObj);
      var newUser = {
        name: credentials.displayName,
        username: credentials.email,
        password: credentials.password,
        userId: credentials.uid
      }
      console.log('user'+JSON.stringify(newUser));
      await user.addUser(newUser);
      commit('SET_USER_CREDENTIALS', newUser);
      commit('CHANGE_LOGIN_STATE');
      // commit('POST_NEW_DATA', newUser);
    } catch (error) {
      return error;
    }
  }
}

async function firebaseCreateUser(credentials) {
  if (credentials.method == "facebook") {
    console.log('facebook auth');
    var provider = await new firebase.auth.FacebookAuthProvider();
    var userdata = await firebase.auth().signInWithPopup(provider).then( function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token =  result.credential.accessToken;
      // The signed-in user info.
      var user =  result.user;
      console.log('facebook login success! ' + JSON.stringify(user));
      return user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      console.log(error.message)
      throw error.message;
    });
    return userdata;
  }
  else if (credentials.method == "google") {
    var provider = await new firebase.auth.GoogleAuthProvider();
    console.log('provider' + provider)
    var userdata = await firebase.auth().signInWithPopup(provider).then(
    function (res) {
        console.log('google login success');
        return res.user
      }
    ).catch((err) => {
      console.log('success ' + err.message);
      throw error.message;
    });
    return userdata;
  }
  else {
    var userdata = await firebase.auth().createUserWithEmailAndPassword(
      credentials.username, credentials.password
    ).then(
      (res) => {
        console.log('success ' + res.user);
        return res.user
      }
    ).catch(
      (err) =>{
        console.log(err.message);
        throw error.message;
      });
      return userdata
  }
  
}

function firebaseLoginUser(credentials) {
    firebase.auth().signInWithEmailAndPassword(
      credentials.username,credentials.password
    ).then( (res)=>{
      return res;
    }).catch( (err)=>{
      throw(err.message)
    });
}
export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}