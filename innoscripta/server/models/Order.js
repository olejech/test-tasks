const { Schema, model, Types } = require('mongoose')

const schema = new Schema({

  name: { type: String, required: true },
  surname: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  items: { type: Array, required: true },
  owner: [{ type: Types.ObjectId, ref: 'User' }],
})

module.exports = model('Order', schema)
