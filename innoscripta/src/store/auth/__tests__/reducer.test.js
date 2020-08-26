import { auth } from 'store/auth/reducer'
import { SIGN_IN, SIGN_OUT } from 'store/types'

describe('auth reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      username: '',
      token: '',
    }
  })

  it('should return initial state', () => {
    expect(auth(undefined, {})).toEqual(initialState)
  })

  it('should set token and username', () => {
    const data = {
      username: 'user', token: 'test',
    }

    const action = {
      type: SIGN_IN, data,
    }

    expect(auth(initialState, action)).toEqual({
      username: 'user', token: 'test',
    })
  })

  it('should clear store', () => {
    const action = {
      type: SIGN_OUT,
    }

    expect(auth(initialState, action)).toEqual({
      username: '', token: '',
    })
  })
})
