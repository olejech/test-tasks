import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import { Button } from 'components/Button'
import cls from './styles.module.scss'

const cx = cn.bind((cls))

export const Modal = ({
  children, title, showModal, setShowModal,
}) => {
  const closeHandler = () => {
    setShowModal(false)
  }

  if (!showModal) return null
  return (
    <div className={cx({ modal: showModal })}>
      <div className={cls.header}>
        <h2>{title}</h2>
        <button className={cls.close} type="button" aria-label="Close modal" onClick={closeHandler} />
      </div>

      <div className={cls.body}>
        {children}
      </div>

      <div className={cls.footer}>
        <Button onClick={closeHandler}>Cancel</Button>
        <Button onClick={closeHandler}>Ok</Button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
}
