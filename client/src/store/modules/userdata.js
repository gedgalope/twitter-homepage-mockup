
const axios = require('axios');
const firebase = require('firebase');


const axiosConfig = {
  baseURL: 'http://localhost:3000',
};

const AXIOS = axios.create(axiosConfig);

const state = {
  userCredentials: {},
  newCredentials: {},
  foundCred: true
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
  POST_NEW_DATA(state, payloadObj) {
    state.newCredentials.push(payloadObj)
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
      const data = await AXIOS.get(userCredentials.username);
      // const data = await HTTP.get('/all');
      /* eslint-disable no-console */
      console.log(userCredentials.username);
      /* eslint-enable no-console */
      firebaseLoginUser(userCredentials)
      commit('SET_USER_CREDENTIALS', data);
    } catch (error) {
      throw (error);
    }
  },

  async postData({ commit }, dataObj) {
    /* eslint-disable no-console */
    console.log(dataObj);
    /* eslint-enable no-console */
    try {
      /* eslint-disable no-console */
      // console.log(JSON.stringify(dataObj));
      
      let promise = await firebaseCreateUser(dataObj);
      var credentials = await promise
      var user = {
        name: credentials.displayName,
        username: credentials.email,
        password: null,
        userId: credentials.uid
      }
      console.log(JSON.stringify(user));
      await AXIOS.post('/post', user);
      commit('POST_NEW_DATA', user);

      // commit('POST_NEW_DATA', newUser);
    } catch (error) {
      return error;
    }
  }
}

async function firebaseCreateUser(credentials) {
  if (credentials.method == "facebook") {
    /* eslint-disable*/
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
    /* eslint-disable no-console */
    console.log('provider' + provider)
    var userdata = await firebase.auth().signInWithPopup(provider).then(
    function (res) {
        /* eslint-disable no-console */
        console.log('google login success');
        /* eslint-enable no-console */
        return res.user
      }
    ).catch((err) => {
      /* eslint-disable no-console */
      console.log('success ' + err.message);
      /* eslint-enable no-console */
      throw error.message;
    });
    return userdata;
  }
  else {
    var userdata = await firebase.auth().createUserWithEmailAndPassword(
      credentials.username, credentials.password
    ).then(
      (res) => {
        /* eslint-disable no-console */
        console.log('success ' + res.user);
        /* eslint-enable no-console */
        return res.user
      }
    ).catch(
      (err) =>{
        /* eslint-disable no-console */
        console.log(err.message);
        /* eslint-enable no-console */
        throw error.message;
      });
      return userdata
  }
  
}

function firebaseLoginUser(credentials) {
    firebase.auth().signInWithEmailAndPassword(
      credentials.username,credentials.password
    ).then( (res)=>{
      alert('welcome user: ' + res.user);
    }).catch( (err)=>{
      throw(err.message)
    });
  

}
export default {
  state,
  getters,
  mutations,
  actions
}