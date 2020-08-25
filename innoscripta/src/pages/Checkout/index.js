import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components/Input'
import MainLayout from 'layouts/MainLayout'
import { Button } from 'components/Button'
import { connect } from 'react-redux'
import { getCurrencySymbol } from 'utils/currency'
import { deliveryCost } from 'constants/data.json'
import { toast } from 'react-toastify'
import { createOrder } from 'store/order/actions'
import { clearCart } from 'store/cart/actions'
import { useHistory } from 'react-router-dom'
import cls from './styles.module.scss'

const CheckoutPage = ({
  total, currency, items, token, createOrder, clearCart,
}) => {
  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: '',
  })

  const onChangeHandler = useCallback(event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }, [form])

  const onSubmit = useCallback(async e => {
    e.preventDefault()

    if (!token) {
      toast.success('Order created')
    } else {
      await createOrder({ ...form, items })
    }
    clearCart()
  }, [token, createOrder, form, clearCart, items])

  const confirmText = `Total: ${getCurrencySymbol(currency)}${total + deliveryCost} (includes delivery cost)`

  if (!total) {
    history.push('/')
  }

  return (
    <MainLayout>
      <h2 className={cls.title}>Checkout order</h2>
      <p className={cls.text}>{confirmText}</p>

      <h3 className={cls.title}>Please fill all fields</h3>
      <form className={cls.form} onSubmit={onSubmit}>
        <Input label="Name:" name="name" id="name" placeholder="Name" onChange={onChangeHandler} required />
        <Input label="Surname:" name="surname" id="surname" placeholder="Surname" onChange={onChangeHandler} required />
        <Input label="Address:" name="address" id="address" placeholder="Address" onChange={onChangeHandler} required />
        <Input label="Phone:" type="tel" name="phone" id="phone" placeholder="Phone" onChange={onChangeHandler} required />
        <Input label="Email:" type="email" name="email" id="email" placeholder="Email" onChange={onChangeHandler} required />

        <Button className={cls.button} type="submit">Confirm</Button>
      </form>
    </MainLayout>
  )
}

CheckoutPage.propTypes = {
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  createOrder: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  items: state.cart.items,
  total: state.cart.total,
  currency: state.cart.currency,
  token: state.auth.token,
})

const mapDispatchToProps = {
  createOrder,
  clearCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
