import React from 'react'
import PropTypes from 'prop-types'
import cls from 'pages/Cart/styles.module.scss'
import { getCurrencySymbol } from 'utils/currency'

export const PizzaItem = props => {
  const {
    title, imageUrl, price, currency,
  } = props

  return (
    <article className={cls.article}>
      <img className={cls.image} src={`/images/pizzas/${imageUrl}`} alt={title} />
      <span className={cls.title}>{title}</span>
      <span className={cls.price}>{`${getCurrencySymbol(currency)}${price[currency]}`}</span>
      <button type="button" aria-label="Remove" className={cls.remove} />
    </article>
  )
}

PizzaItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.exact({ dollars: PropTypes.number, euros: PropTypes.number }).isRequired,
  currency: PropTypes.string.isRequired,
}
