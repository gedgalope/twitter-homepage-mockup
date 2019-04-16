import api from "./api"

export default {
  // eslint-disable no-console
  addUser(user) {
    return api().post('/post', user)
  },
  getUser(user) {
    return api().get('/:user',user)
  }
}