import {
  ADD_PIZZA_TO_CART, CALC_TOTAL,
  CHANGE_CURRENCY, CLEAR_CART,
  REMOVE_PIZZA_FROM_CART,
} from 'store/types'
import { getCurrencyToggledName } from 'utils/currency'

const initialState = {
  items: [],
  total: 0,
  currency: 'dollars',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...action.pizza }],
      }
    case REMOVE_PIZZA_FROM_CART:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.pizza.id)],
      }
    case CALC_TOTAL:
      return {
        ...state,
        total: state.items.reduce((acc, item) => acc + item.price[state.currency], 0),
      }
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: getCurrencyToggledName(state.currency),
      }
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0,
      }
    default:
      return state
  }
}
