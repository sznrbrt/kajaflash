import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const orderSchema = new mongoose.Schema({
  createdAt: { type: String, required: true },
  processedAt: { type: String },
  items: []

  name:
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  password: { type: String, required: true },
  addresses: [
    {
      name: { type: String },
      address: { type: String }
    }
  ],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
