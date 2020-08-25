import { cart } from 'store/cart/reducer'
import {
  addPizzaToCart,
  calcTotal, changeCurrency, clearCart,
  removePizzaFromCart,
} from 'store/cart/actions'

describe('cart reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      items: [],
      total: 0,
      currency: 'dollars',
    }
  })

  it('should return initial state', () => {
    expect(cart(undefined, {})).toEqual(initialState)
  })

  it('should add pizza item', () => {
    const pizza = {
      id: 1,
      title: 'pizza',
    }

    expect(cart(initialState, addPizzaToCart(pizza))).toEqual({
      items: [{ ...pizza }],
      total: 0,
      currency: 'dollars',
    })
  })

  it('should add one more pizza item', () => {
    const state = {
      items: [{
        id: 1,
        title: 'pizza',
      }],
      total: 0,
      currency: 'dollars',
    }

    const pizza = {
      id: 2,
      title: 'pizza2',
    }

    expect(cart(state, addPizzaToCart(pizza))).toEqual({
      items: [{
        id: 1,
        title: 'pizza',
      }, pizza],
      total: 0,
      currency: 'dollars',
    })
  })

  it('should remove one pizza item by id', () => {
    const state = {
      items: [{
        id: 1,
        title: 'pizza',
      }],
      total: 0,
      currency: 'dollars',
    }

    const id = 1

    expect(cart(state, removePizzaFromCart({ id }))).toEqual(initialState)
  })

  it('should sum all items by currency', () => {
    const state = {
      items: [{
        price: {
          dollars: 1,
          euros: 2,
        },
      }, {
        price: {
          dollars: 1,
          euros: 2,
        },
      }],
      total: 0,
      currency: 'dollars',
    }

    expect(cart(state, calcTotal())).toEqual({
      items: [{
        price: {
          dollars: 1,
          euros: 2,
        },
      }, {
        price: {
          dollars: 1,
          euros: 2,
        },
      }],
      total: 2,
      currency: 'dollars',
    })
  })

  it('should toggle currency', () => {
    const state = {
      currency: 'dollars',
    }

    expect(cart(state, changeCurrency())).toEqual({
      currency: 'euros',
    })
  })

  it('should clear cart', () => {
    const state = {
      items: [{
        price: {
          dollars: 1,
          euros: 2,
        },
      }],
      total: 2,
      currency: 'dollars',
    }

    expect(cart(state, clearCart())).toEqual(initialState)
  })
})
