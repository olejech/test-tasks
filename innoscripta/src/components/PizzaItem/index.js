import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import { connect } from 'react-redux'
import { addPizzaIdToCart, removePizzaIdFromCart } from 'store/actions'
import cls from './styles.module.scss'

const PizzaItem = props => {
  const {
    id, imageUrl, title, description, price, addPizzaIdToCart, removePizzaIdFromCart,
  } = props

  const [disabled, setDisabled] = useState(false)

  const onClickHandler = clickedPizza => () => {
    setDisabled(prev => !prev)
    return disabled ? removePizzaIdFromCart(clickedPizza) : addPizzaIdToCart(clickedPizza)
  }

  return (
    <div className={cls.card}>
      <img className={cls.image} src={`/images/pizzas/${imageUrl}`} alt={title} />
      <div className={cls.title}>{title}</div>
      <div className={cls.description}>{description}</div>
      <Button size="sm" onClick={onClickHandler({ id, price: price.dollars })} disabled={disabled}>
        Add to cart $
        {price.dollars}
      </Button>
    </div>
  )
}

PizzaItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.exact({ dollars: PropTypes.number, euros: PropTypes.number }).isRequired,
  addPizzaIdToCart: PropTypes.func.isRequired,
  removePizzaIdFromCart: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  addPizzaIdToCart, removePizzaIdFromCart,
}

export default connect(null, mapDispatchToProps)(PizzaItem)
