import React from 'react'
import PropTypes from 'prop-types'
import cls from './styles.module.scss'

export const Form = ({ onSubmit }) => (
  <form className={cls.form} onSubmit={onSubmit}>
    <input className={cls.input} type="text" name="name" id="name" placeholder="Name" required />
    <input className={cls.input} type="text" name="surname" id="surname" placeholder="Surname" required />
    <input className={cls.input} type="text" name="address" id="address" placeholder="Address" required />
    <input className={cls.input} type="tel" name="phone" id="phone" placeholder="Phone" required />
    <input className={cls.input} type="email" name="email" id="email" placeholder="Email" />
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
