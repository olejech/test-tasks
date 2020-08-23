import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames/bind'
import Cart from 'components/Cart'
import CurrencySwitch from 'components/CurrencySwitch'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

export const MainLayout = ({ children }) => (
  <div className={cls.wrap}>
    <header className={cx('header', 'container')}>
      <Link to="/"><img className={cls.logo} src="./images/logo.svg" alt="logo" /></Link>
      <h1 className={cls.title}>React pizza</h1>
      <h4 className={cls.subtitle}>Your interactive Pizza App</h4>
      <div className={cls.cart}><Cart /></div>
      <div className={cls.currency}><CurrencySwitch /></div>
    </header>

    <main className={cx('main', 'container')}>
      {children}
    </main>

    <footer className={cx('footer', 'container')}>
      Made with
      <span role="img" aria-label="pizza-emoji">&nbsp;🍕</span>
      @2020
    </footer>
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.element), PropTypes.element],
  ).isRequired,
}
