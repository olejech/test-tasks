import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

function noop() {}

export const Button = ({
  children, onClick, disabled, type, className,
}) => (

  <button
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    className={cx('button', { disabled }, className)}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: '',
  onClick: noop,
}
