const { Router } = require('express')
const Order = require('../models/Order')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/create', auth, async (req, res) => {
  try {
    const { newOrder } = req.body
    const order = new Order({ ...newOrder, owner: req.user.userId })
    await order.save()
    res.status(201).json({ message: 'Order created' })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ owner: req.user.userId })
    res.json(orders)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
