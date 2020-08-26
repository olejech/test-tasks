require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/order', require('./routes/order.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '../build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
  })
}

const PORT = process.env.SERVER_PORT || 5000

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
