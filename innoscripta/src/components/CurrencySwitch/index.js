import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import { connect } from 'react-redux'
import { calcTotal, changeCurrency } from 'store/cart/actions'
import { getCurrencySymbol } from 'utils/currency'
import cls from './styles.module.scss'

const CurrencySwitch = ({ currency, changeCurrency, calcTotal }) => {
  const onClickHandler = () => {
    changeCurrency()
    calcTotal()
  }

  return (
    <Button
      className={cls.switcher}
      onClick={onClickHandler}
    >
      {getCurrencySymbol(currency)}
    </Button>
  )
}

CurrencySwitch.propTypes = {
  currency: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  calcTotal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  currency: state.cart.currency,
})

const mapDispatchToProps = {
  changeCurrency, calcTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitch)
