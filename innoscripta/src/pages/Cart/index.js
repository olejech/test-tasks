import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MainLayout } from 'layouts/MainLayout'
import { connect } from 'react-redux'
import { PizzaItem } from 'components/PizzaItem'
import { calcTotal, clearCart, removePizzaFromCart } from 'store/actions'
import { CartEmpty } from 'components/CartEmpty'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { getCurrencySymbol } from 'utils/currency'
import { deliveryCost } from 'constants/data.json'
import { Form } from 'components/Form'
import cls from './styles.module.scss'

const CartPage = props => {
  const {
    items, currency, clearCart, removePizzaFromCart, calcTotal, total,
  } = props

  const [showModal, setShowModal] = useState(false)

  const removeItemHandler = pizza => () => {
    removePizzaFromCart(pizza)
    calcTotal()
  }

  const confirmHandler = () => {
    setShowModal(true)
  }

  const deliveryText = `${getCurrencySymbol(currency)}${deliveryCost} delivery cost`
  const confirmText = `Total: ${getCurrencySymbol(currency)}${total + deliveryCost} (includes delivery cost)`

  if (!items.length) return <MainLayout><CartEmpty /></MainLayout>

  return (
    <MainLayout>
      <section>
        <div className={cls.header}>
          <h2 className={cls.h2}>Cart page</h2>
          <button type="button" onClick={() => clearCart} className={cls.clear}>clear cart</button>
        </div>

        {items.map(item => (
          <PizzaItem {...item} currency={currency} removeItem={removeItemHandler} key={item.id} />
        ))}

        <label className={cls.label}>
          <input className={cls.checkbox} type="checkbox" name="delivery" id="delivery" checked disabled />
          {deliveryText}
        </label>

        <Button onClick={confirmHandler}>Confirm order</Button>

        <Modal showModal={showModal} setShowModal={setShowModal} title="Confirm order">
          <Form onSubmit={confirmHandler} />
          <p>{confirmText}</p>
        </Modal>
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
  items: state.items,
  currency: state.currency,
  total: state.total,
})

const mapDispatchToProps = {
  clearCart,
  removePizzaFromCart,
  calcTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
