import React from 'react'
import PropTypes from 'prop-types'
import { getCurrencySymbol } from 'utils/currency'
import cls from './styles.module.scss'

export const PizzaItem = props => {
  const {
    id, title, imageUrl, price, currency, removeItem,
  } = props

  return (
    <article className={cls.article}>
      <img className={cls.image} src={`/images/pizzas/${imageUrl}`} alt={title} />
      <span className={cls.title}>{title}</span>
      <span className={cls.price}>{`${getCurrencySymbol(currency)}${price[currency]}`}</span>
      <button
        type="button"
        aria-label="Remove"
        className={cls.remove}
        onClick={removeItem({ id })}
      />
    </article>
  )
}

PizzaItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.exact({ dollars: PropTypes.number, euros: PropTypes.number }).isRequired,
  currency: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
}
