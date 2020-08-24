import React from 'react'
import PropTypes from 'prop-types'
import cls from './styles.module.scss'

export const EmptyLayout = ({ children }) => (
  <div className={cls.wrap}>
    <main className={cls.container}>
      {children}
    </main>
  </div>
)

EmptyLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
