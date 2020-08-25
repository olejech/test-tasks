import axios from 'axios'
import { store } from 'store'

axios.interceptors.request.use(request => {
  if (store.getState().auth.token && !request.headers.common.Authorization) {
    const { token } = store.getState().auth
    request.headers.common.Authorization = `Bearer ${token}`
  }
  return request
})

axios.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('authData')
  }
  return Promise.reject(error);
})

export default axios
