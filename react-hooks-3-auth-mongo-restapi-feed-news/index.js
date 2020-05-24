require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const PORT = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    )
  } catch (error) {
    console.log('Server Error', error.message)
    process.exit(1)
  }
}

start()
