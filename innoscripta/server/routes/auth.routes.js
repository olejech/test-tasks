const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = Router()

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body

    const candidate = await User.findOne({ username })

    if (candidate) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ username, password: hashedPassword })

    await user.save()

    return res.status(201).json({ message: 'User created' })
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post(
  '/signin',
  async (req, res) => {
    try {
      const { username, password } = req.body

      const user = await User.findOne({ username })

      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Password is wrong' })
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
      )

      return res.json({ token, username })
    } catch (e) {
      return res.status(500).json({ message: 'Something went wrong' })
    }
  },
)

module.exports = router
