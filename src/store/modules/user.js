import { login } from '@/api/sys'
import md5 from 'md5'
import { TOKEN } from '@/constant/index'
import Storage from '@/utils/storage'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: Storage.getStorage(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      Storage.setStorage(TOKEN, token)
      state.token = token
    }
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            commit('setToken', data.token)
            router.push('/')
            resolve(data)
          })
          .catch(reject)
      })
    }
  }
}
