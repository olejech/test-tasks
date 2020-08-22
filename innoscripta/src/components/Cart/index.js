import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cls from './styles.module.scss'

const Cart = ({ items, total }) => (
  <Link to="/cart" className={cls.cart}>
    <div className={cls.total}>
      $
      {total}
    </div>
    <div className={cls.items}>{items.length}</div>
  </Link>
)

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  items: state.items,
  total: state.total,
})

export default connect(mapStateToProps)(Cart)
