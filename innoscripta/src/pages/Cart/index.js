import React from 'react'
import PropTypes from 'prop-types'
import { MainLayout } from 'layouts/MainLayout'
import { connect } from 'react-redux'
import { PizzaItem } from 'pages/Cart/PizzaItem'
import { clearCart } from 'store/actions'
import cls from './styles.module.scss'

const CartPage = ({ items, currency, clearCart }) => {
  const onClickHandler = () => {
    clearCart()
  }

  return (
    <MainLayout>
      <section>
        <div className={cls.header}>
          <h2 className={cls.h2}>Cart page</h2>
          <button type="button" onClick={onClickHandler} className={cls.clear}>clear cart</button>
        </div>

        {items.map(item => (
          <PizzaItem {...item} currency={currency} key={item.id} />
        ))}
      </section>
    </MainLayout>
  )
}

CartPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.string.isRequired,
  clearCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  items: state.items,
  currency: state.currency,
})

const mapDispatchToProps = {
  clearCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
