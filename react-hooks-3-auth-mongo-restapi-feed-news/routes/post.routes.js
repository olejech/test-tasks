const { Router } = require('express')
const Post = require('../models/Post')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const { check, validationResult } = require('express-validator')
const router = Router()

router.post(
  '/create',
  [
    auth,
    check('title', 'Отсутствует заголовок').notEmpty(),
    check('text', 'Отсутствует текст').notEmpty()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные:'
        })
      }

      const data = {
        ...req.body,
        owner: req.user.userId
      }

      const post = new Post(data)
      await post.save()

      const userById = await User.findById(req.user.userId)
      userById.posts.push(post)
      await userById.save()

      res.json({ message: 'Новость создана' })
    } catch (error) {
      res.status(500).json({ message: 'Что-то произошло' })
    }
  }
)

router.get('/fetchAll', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Что-то произошло' })
  }
})

router.get('/fetchByUserId', auth, async (req, res) => {
  try {
    const posts = await Post.find({ owner: req.user.userId })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Что-то произошло' })
  }
})

router.get('/fetchByPostId/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (error) {
    res.status(500).json({ message: 'Что-то произошло' })
  }
})

module.exports = router
