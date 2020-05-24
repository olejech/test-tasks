const { Router } = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.get('/', auth, async (req, res) => {
  try {
    const profile = await User.findById(req.user.userId).populate('posts')
    res.json(profile)
  } catch (error) {
    res.status(500).json({ message: 'Что-то произошло' })
  }
})

module.exports = router
