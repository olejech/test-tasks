import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import cls from './styles.module.scss'

const cx = cn.bind(cls)

export const Input = ({
  className, label, type, name, id, placeholder, required,
}) => (

  <label className={cls.label}>
    <span className={cls.text}>{label}</span>
    <input
      className={cx('input', className)}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  </label>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  required: false,
}
