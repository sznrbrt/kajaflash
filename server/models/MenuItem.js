import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  name: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  image: { type: String },
  price: { type: Number },
  desc: { type: String }
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
