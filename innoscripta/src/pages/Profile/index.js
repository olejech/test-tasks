import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MainLayout from 'layouts/MainLayout'
import { connect } from 'react-redux'
import { signOut } from 'store/auth/actions'
import { Button } from 'components/Button'
import { fetchOrders } from 'store/order/actions'
import { PizzaItem } from 'components/PizzaItem'
import cls from './styles.module.scss'

const ProfilePage = ({ currency, signOut }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const orders = await fetchOrders()
        setOrders(orders)
      } catch (e) {}
    }
    fetchData()
  }, [])

  return (
    <MainLayout>
      <h1 className={cls.title}>ProfilePage</h1>
      <Button className={cls.button} onClick={signOut}>Sign out</Button>

      <h2 className={cls.title}>Your orders:</h2>
      <div className={cls.wrap}>
        {
          orders.map((order, i) => (
            <div className={cls.order} key={order._id}>
              <h3 className={cls.title}>
                #&nbsp;
                {i + 1}
              </h3>
              <ul className={cls.list}>
                <li className={cls.item}>
                  Name:&nbsp;
                  <b>{order.name}</b>
                </li>
                <li className={cls.item}>
                  Surname:&nbsp;
                  <b>{order.surname}</b>
                </li>
                <li className={cls.item}>
                  Address:&nbsp;
                  <b>{order.address}</b>
                </li>
                <li className={cls.item}>
                  Phone:&nbsp;
                  <b>{order.phone}</b>
                </li>
                <li className={cls.item}>
                  Email:&nbsp;
                  <b>{order.email}</b>
                </li>
                {
                  order.items.map(item => (
                    <PizzaItem {...item} id={item.id} currency={currency} key={item.id} />
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </MainLayout>
  )
}

ProfilePage.propTypes = {
  signOut: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
  signOut,
}

const mapStateToProps = state => ({
  currency: state.cart.currency,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
