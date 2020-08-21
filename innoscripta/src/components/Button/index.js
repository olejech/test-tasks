import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

export const Button = ({ children }) => (
  <button type="button" className={cx('button')}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
}
