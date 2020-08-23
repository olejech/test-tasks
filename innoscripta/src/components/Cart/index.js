import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrencySymbol } from 'utils/currency'
import cls from './styles.module.scss'

const Cart = ({ items, total, currency }) => (
  <Link to="/cart" className={cls.cart}>
    <div className={cls.total}>
      {getCurrencySymbol(currency)}
      {total}
    </div>
    <div className={cls.items}>{items.length}</div>
  </Link>
)

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  items: state.items,
  total: state.total,
  currency: state.currency,
})

export default connect(mapStateToProps)(Cart)
