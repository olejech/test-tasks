import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import { connect } from 'react-redux'
import { calcTotal, changeCurrency } from 'store/actions'
import { getCurrencySymbol } from 'utils/currency'

const CurrencySwitch = ({ currency, changeCurrency, calcTotal }) => {
  const onClickHandler = () => {
    changeCurrency()
    calcTotal()
  }

  return <Button onClick={onClickHandler}>{getCurrencySymbol(currency)}</Button>
}

CurrencySwitch.propTypes = {
  currency: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  calcTotal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  currency: state.currency,
})

const mapDispatchToProps = {
  changeCurrency, calcTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitch)
