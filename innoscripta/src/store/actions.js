import {
  ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART, CHANGE_CURRENCY, CALC_TOTAL,
} from 'store/types'

export const addPizzaToCart = pizza => ({ type: ADD_PIZZA_TO_CART, pizza })
export const removePizzaFromCart = pizza => ({ type: REMOVE_PIZZA_FROM_CART, pizza })
export const calcTotal = () => ({ type: CALC_TOTAL })

export const changeCurrency = () => ({ type: CHANGE_CURRENCY })
