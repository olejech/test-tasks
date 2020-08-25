import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import { connect } from 'react-redux'
import { Header } from 'components/Header'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

const MainLayout = ({ children, username }) => (
  <div className={cls.wrap}>
    <Header username={username} />

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
