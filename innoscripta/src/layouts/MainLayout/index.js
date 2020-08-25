import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames/bind'
import Cart from 'components/Cart'
import CurrencySwitch from 'components/CurrencySwitch'
import { connect } from 'react-redux'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

const MainLayout = ({ children, username }) => {
  const greeting = (
    <>
      Hello,&nbsp;
      <Link to="/profile">{username}</Link>
    </>
  )

  return (
    <div className={cls.wrap}>
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
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  username: PropTypes.string,
}

MainLayout.defaultProps = {
  username: null,
}

const mapStateToProps = state => ({
  username: state.auth.username,
})

export default connect(mapStateToProps)(MainLayout)
