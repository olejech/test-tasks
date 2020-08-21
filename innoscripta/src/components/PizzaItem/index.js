import React from 'react'
import PropTypes from 'prop-types'
import cls from './styles.module.scss'

export const PizzaItem = ({ imageUrl, title, description }) => (
  <div className={cls.card}>
    <img className={cls.image} src={`/images/pizzas/${imageUrl}`} alt={title} />
    <div className={cls.title}>{title}</div>
    <div className={cls.description}>{description}</div>
  </div>
)

PizzaItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
