import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import { connect } from 'react-redux'
import {
  addPizzaToCart,
  calcTotal,
  removePizzaFromCart,
} from 'store/actions'
import { getCurrencySymbol, getCurrencyName } from 'utils/currency'
import cls from './styles.module.scss'

const PizzaCard = props => {
  const {
    id,
    imageUrl,
    title,
    description,
    price,
    currency,
    addPizzaToCart,
    removePizzaFromCart,
    calcTotal,
  } = props

  const [disabled, setDisabled] = useState(false)

  const onClickHandler = clickedPizza => () => {
    setDisabled(prev => !prev)
    if (disabled) {
      removePizzaFromCart(clickedPizza)
    } else {
      addPizzaToCart(clickedPizza)
    }
    calcTotal()
  }

  const priceDependingCurrency = price[getCurrencyName(currency)].toString()
  const buttonText = `Add to cart ${getCurrencySymbol(currency)}${priceDependingCurrency}`

  return (
    <div className={cls.card}>
      <img className={cls.image} src={`/images/pizzas/${imageUrl}`} alt={title} />
      <div className={cls.title}>{title}</div>
      <div className={cls.description}>{description}</div>
      <Button
        size="sm"
        onClick={onClickHandler({
          id, price, title, imageUrl,
        })}
        disabled={disabled}
      >
        {buttonText}
      </Button>
    </div>
  )
}

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.exact({ dollars: PropTypes.number, euros: PropTypes.number }).isRequired,
  currency: PropTypes.string.isRequired,
  addPizzaToCart: PropTypes.func.isRequired,
  removePizzaFromCart: PropTypes.func.isRequired,
  calcTotal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  currency: state.currency,
})

const mapDispatchToProps = {
  addPizzaToCart, removePizzaFromCart, calcTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCard)
