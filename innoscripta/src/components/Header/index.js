import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Cart from 'components/Cart'
import CurrencySwitch from 'components/CurrencySwitch'
import cn from 'classnames/bind'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

export const Header = memo(({ username }) => {
  const greeting = (
    <>
      Hello,&nbsp;
      <Link to="/profile">{username}</Link>
    </>
  )

  return (
    <header className={cx('header', 'container')}>
      <Link to="/"><img className={cls.logo} src="./images/logo.svg" alt="logo" /></Link>
      <h1 className={cls.title}>React pizza</h1>
      <h4 className={cls.subtitle}>
        {username ? greeting : 'Your interactive Pizza App'}
      </h4>
      { !username && (
        <span className={cls.links}>
          <Link to="/signin">Sign in</Link>
          &nbsp;/&nbsp;
          <Link to="/signup">Sign up</Link>
        </span>
      ) }
      <div className={cls.cart}><Cart /></div>
      <div className={cls.currency}><CurrencySwitch /></div>
    </header>
  )
})

Header.propTypes = {
  username: PropTypes.string.isRequired,
}
