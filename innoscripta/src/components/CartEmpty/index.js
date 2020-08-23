import React from 'react'
import cls from './styles.module.scss'

export const CartEmpty = () => (
  <div className={cls.wrap}>
    <h2 className={cls.title}>Cart is empty</h2>
    <p className={cls.text}>
      You have not ordered pizza yet. To order pizza, go to the main page.
    </p>
    <img className={cls.image} src="/images/cart-empty.svg" alt="Cart is empty" />
  </div>
)