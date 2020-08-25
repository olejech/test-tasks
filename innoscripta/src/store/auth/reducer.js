import {
  SIGN_IN, SIGN_OUT,
} from 'store/types'

const initialState = {
  username: '',
  token: '',
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        username: action.data.username,
        token: action.data.token,
      }
    case SIGN_OUT:
      return {
        username: '',
        token: '',
      }
    default:
      return state
  }
}
