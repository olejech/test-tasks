import React from 'react'
import PropTypes from 'prop-types'
import cls from './styles.module.scss'

export const MainLayout = ({ children }) => (
  <div className={cls.wrap}>
    <div className={cls.container}>
      {children}
    </div>
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
