import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components/Input'
import { MainLayout } from 'layouts/MainLayout'
import { Button } from 'components/Button'
import { connect } from 'react-redux'
import { getCurrencySymbol } from 'utils/currency'
import { deliveryCost } from 'constants/data.json'
import cls from './styles.module.scss'

const CheckoutPage = ({ total, currency }) => {
  const onSubmit = e => {
    e.preventDefault()
    // eslint-disable-next-line no-alert
    alert('Success!')
  }

  const confirmText = `Total: ${getCurrencySymbol(currency)}${total + deliveryCost} (includes delivery cost)`

  if (!total) return <p>Your should select pizza before</p>

  return (
    <MainLayout>
      <h2 className={cls.title}>Checkout order</h2>
      <p className={cls.text}>{confirmText}</p>

      <h3 className={cls.title}>Please fill all fields</h3>
      <form className={cls.form} onSubmit={onSubmit}>
        <Input label="Name:" name="name" id="name" placeholder="Name" required />
        <Input label="Surname:" name="surname" id="surname" placeholder="Surname" required />
        <Input label="Address:" name="address" id="address" placeholder="Address" required />
        <Input label="Phone:" type="tel" name="phone" id="phone" placeholder="Phone" required />
        <Input label="Email:" type="email" name="email" id="email" placeholder="Email" required />

        <Button className={cls.button} type="submit">Confirm</Button>
      </form>
    </MainLayout>
  )
}

CheckoutPage.propTypes = {
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  total: state.total,
  currency: state.currency,
})

export default connect(mapStateToProps)(CheckoutPage)
