import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import cls from './styles.module.scss'

export const CartEmpty = memo(() => (
  <div className={cls.wrap}>
    <h2 className={cls.title}>Cart is empty</h2>
    <p className={cls.text}>
      You have not ordered pizza yet. To order pizza,
      {' '}
      <Link to="/">go to the main page</Link>
      .
    </p>
    <img className={cls.image} src="/images/cart-empty.svg" alt="Cart is empty" />
  </div>
))
