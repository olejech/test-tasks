import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import MainLayout from 'layouts/MainLayout'
import { connect } from 'react-redux'
import { PizzaItem } from 'components/PizzaItem'
import { calcTotal, clearCart, removePizzaFromCart } from 'store/cart/actions'
import { CartEmpty } from 'components/CartEmpty'
import { Button } from 'components/Button'
import { getCurrencySymbol } from 'utils/currency'
import { deliveryCost } from 'constants/data.json'
import cls from './styles.module.scss'

const CartPage = props => {
  const {
    items, currency, clearCart, removePizzaFromCart, calcTotal,
  } = props

  const history = useHistory()

  const removeItemHandler = pizza => () => {
    removePizzaFromCart(pizza)
    calcTotal()
  }

  const goToCheckoutPage = () => {
    history.push('/checkout')
  }

  const deliveryText = `${getCurrencySymbol(currency)}${deliveryCost} delivery cost`

  if (!items.length) return <MainLayout><CartEmpty /></MainLayout>

  return (
    <MainLayout>
      <section>
        <div className={cls.header}>
          <h2 className={cls.h2}>Cart page</h2>
          <button type="button" onClick={() => clearCart()} className={cls.clear}>clear cart</button>
        </div>

        {items.map(item => (
          <PizzaItem {...item} currency={currency} removeItem={removeItemHandler} key={item.id} />
        ))}

        <label className={cls.label}>
          <input className={cls.checkbox} type="checkbox" name="delivery" id="delivery" checked disabled />
          {deliveryText}
        </label>

        <Button onClick={goToCheckoutPage}>Confirm order</Button>
      </section>
    </MainLayout>
  )
}

CartPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.string.isRequired,
  clearCart: PropTypes.func.isRequired,
  removePizzaFromCart: PropTypes.func.isRequired,
  calcTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  items: state.cart.items,
  currency: state.cart.currency,
  total: state.cart.total,
})

const mapDispatchToProps = {
  clearCart,
  removePizzaFromCart,
  calcTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
