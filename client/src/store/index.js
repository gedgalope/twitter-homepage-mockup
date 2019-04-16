import Vue from 'vue'
import Vuex from 'vuex'
import UserData from './modules/userdata'
import storeMisc from './modules/storeMisc'
import userProfileFeed from './modules/userProfileFeed'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        UserData,
        storeMisc,
        userProfileFeed
    },
    strict: true
});