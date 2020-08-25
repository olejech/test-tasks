import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cart } from './cart/reducer'
import { auth } from './auth/reducer'

const reducers = combineReducers({
  cart,
  auth,
})

export const store = createStore(reducers, applyMiddleware(thunk))
