
const state = {
  signupDialog:false
}

const getters = {

}

const mutations = {
  dialogState(state){
    // alert(state.signupDialog);
    state.signupDialog = !state.signupDialog;
  }
}

const actions = {

}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}