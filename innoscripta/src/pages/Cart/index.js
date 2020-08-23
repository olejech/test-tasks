import React from 'react'
import PropTypes from 'prop-types'
import { MainLayout } from 'layouts/MainLayout'
import { connect } from 'react-redux'
import { getCurrencySymbol } from 'utils/currency'
import cls from './styles.module.scss'

const CartPage = ({ items, currency }) => (
  <MainLayout>
    <section>
      <div className={cls.header}>
        <h2 className={cls.h2}>Cart page</h2>
        <span className={cls.clear}>clear cart</span>
      </div>

      {
        items.map(item => (
          <article className={cls.article} key={item.id}>
            <img className={cls.image} src={`/images/pizzas/${item.imageUrl}`} alt={item.title} />
            <span className={cls.title}>{item.title}</span>
            <span className={cls.price}>{`${getCurrencySymbol(currency)}${item.price[currency]}`}</span>
            <button type="button" aria-label="Remove" className={cls.remove} />
          </article>
        ))
      }
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
