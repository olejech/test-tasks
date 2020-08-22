import { ADD_PIZZA_TO_CART } from 'store/types'

const initialState = {
  items: [],
  total: 0,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      return {
        items: [...state.items, action.pizza.id],
        total: state.total + action.pizza.price,
      }
    default:
      return state
  }
}
