import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const orderSchema = new mongoose.Schema({
  createdAt: { type: String, required: true },
  processedAt: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
  totalAmount: { type: Number },
  comment: { type: String },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  deliveryAddress: { type: String },
  status: {
    processed: { type: Boolean, default: false },
    cooked: { type: Boolean, default: false },
    underDelivery: { type: Boolean, default: false },
    delivered: { type: Boolean, default: false },
    cancelled: { type: Boolean, default: false }
  }
});

orderSchema.methods.checkout = function(update, cb) {
  this.status[update] = true;
  this.save(cb)
}

const Order = mongoose.model('Order', orderSchema);

export default Order;
