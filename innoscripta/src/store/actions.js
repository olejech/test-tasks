import {
  ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART, CHANGE_CURRENCY, CALC_TOTAL, CLEAR_CART,
} from 'store/types'

export const addPizzaToCart = pizza => ({ type: ADD_PIZZA_TO_CART, pizza })
export const removePizzaFromCart = pizza => ({ type: REMOVE_PIZZA_FROM_CART, pizza })
export const clearCart = () => ({ type: CLEAR_CART })
export const calcTotal = () => ({ type: CALC_TOTAL })

export const changeCurrency = () => ({ type: CHANGE_CURRENCY })
