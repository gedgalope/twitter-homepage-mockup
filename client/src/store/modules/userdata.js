
const axios = require('axios');


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

  async getData({ commit }, username) {
    // async getData({ commit }) {

    try {
      const data = await AXIOS.get(username);
      // const data = await HTTP.get('/all');
      /* eslint-disable no-console */
      console.log(username);
      /* eslint-enable no-console */
      commit('SET_USER_CREDENTIALS', data);
    } catch (error) {
      return (error);
    }
  },

  async postData({ commit }, dataObj) {
    /* eslint-disable no-console */
    // console.log('in vuex posting data');
    /* eslint-enable no-console */
    try {
      /* eslint-disable no-console */
      // console.log(JSON.stringify(dataObj));
      /* eslint-enable no-console */
      const newUser = {
        name: dataObj.name,
        lastname: dataObj.lastname,
        username: dataObj.username,
        password: dataObj.password,
      }
      /* eslint-disable no-console */
      // console.log(JSON.stringify(newUser));
      /* eslint-enable no-console */
      await AXIOS.post('/post', newUser);
      /* eslint-disable no-console */
      // console.log(result);
      /* eslint-enable no-console */
      commit('POST_NEW_DATA', newUser);
    } catch (error) {
      return error;
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}