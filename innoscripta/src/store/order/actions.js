import axios from 'plugins/axios'
import { toast } from 'react-toastify'

export const createOrder = newOrder => async () => {
  try {
    const { data } = await axios.post('/api/order/create', { newOrder })
    toast.success(data.message)
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
}

export const fetchOrders = async () => {
  try {
    const { data } = await axios.get('/api/order')
    return data
  } catch (e) {
    toast.error(e.response.data.message)
    throw e
  }
}
