import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cls from './styles.module.scss'

export const EmptyLayout = memo(({ children }) => (
  <div className={cls.wrap}>
    <main className={cls.container}>
      {children}
      <Link to="/">Go to home page</Link>
    </main>
  </div>
))

EmptyLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
