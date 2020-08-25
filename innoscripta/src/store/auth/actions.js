import {
  SIGN_IN, SIGN_OUT,
} from 'store/types'
import axios from 'plugins/axios'
import { toast } from 'react-toastify'

export const signUp = form => async () => {
  try {
    await axios.post('/api/auth/signup', form)
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
}

export const signIn = form => async dispatch => {
  try {
    const { data } = await axios.post('/api/auth/signin', form)
    dispatch({ type: SIGN_IN, data })
    localStorage.setItem('authData', JSON.stringify({ username: data.username, token: data.token }))
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
}

export const signOut = () => dispatch => {
  dispatch({ type: SIGN_OUT })
  localStorage.removeItem('authData')
}
