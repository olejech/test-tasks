import { SIGNIN, SIGNOUT, SIGNIN_AUTO } from '../types'

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        token: action.token
      }

    case SIGNOUT:
      return {
        ...state,
        token: null
      }

    case SIGNIN_AUTO:
      return {
        ...state,
        token: action.token
      }

    default:
      return state
  }
}
