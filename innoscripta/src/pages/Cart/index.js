import React from 'react'
import PropTypes from 'prop-types'
import { MainLayout } from 'layouts/MainLayout'
import { connect } from 'react-redux'
import { PizzaItem } from 'pages/Cart/PizzaItem'
import cls from './styles.module.scss'

const CartPage = ({ items, currency }) => (
  <MainLayout>
    <section>
      <div className={cls.header}>
        <h2 className={cls.h2}>Cart page</h2>
        <span className={cls.clear}>clear cart</span>
      </div>

      {items.map(item => (
        <PizzaItem {...item} currency={currency} key={item.id} />
      ))}
    </section>
  </MainLayout>
)

CartPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  items: state.items,
  currency: state.currency,
})

export default connect(mapStateToProps)(CartPage)
