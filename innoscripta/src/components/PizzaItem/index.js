import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import cls from './styles.module.scss'

export const PizzaItem = ({
  imageUrl, title, description, price,
}) => (
  <div className={cls.card}>
    <img className={cls.image} src={`/images/pizzas/${imageUrl}`} alt={title} />
    <div className={cls.title}>{title}</div>
    <div className={cls.description}>{description}</div>
    <Button size="sm">
      Add to cart $
      {price.dollars}
    </Button>
  </div>
)

PizzaItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.exact({ dollars: PropTypes.number, euros: PropTypes.number }).isRequired,
}
