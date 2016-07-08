import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

export default Address;
