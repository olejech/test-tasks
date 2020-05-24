import { SIGNIN, SIGNOUT, SIGNIN_AUTO } from '../types'

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId
      }

    case SIGNOUT:
      return {
        ...state,
        token: null,
        userId: null
      }

    case SIGNIN_AUTO:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId
      }

    default:
      return state
  }
}
