const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const router = Router()

const jwtSecret = 'secret' || process.env.JWT

router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 3 символа').isLength({ min: 3 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации'
        })
      }

      const { email, password } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res
          .status(400)
          .json({ message: 'Такой пользователь уже существует' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'Пользователь создан' })
    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так...' })
    }
  }
)

router.post(
  '/login',
  [
    check('email', 'Введите корректный email')
      .normalizeEmail()
      .isEmail(),
    check('password', 'Введите пароль длиннее 3 и более символов').isLength({
      min: 3
    })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при авторизации'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Логин или пароль не верный' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Логин или пароль не верный' })
      }

      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: '1h'
      })

      res.json({ token, userId: user.id, message: 'Успешно авторизовались' })
    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так...' })
    }
  }
)

module.exports = router
