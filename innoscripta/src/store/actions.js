import { ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART } from 'store/types'

export const addPizzaIdToCart = pizza => ({ type: ADD_PIZZA_TO_CART, pizza })
export const removePizzaIdFromCart = pizza => ({ type: REMOVE_PIZZA_FROM_CART, pizza })
