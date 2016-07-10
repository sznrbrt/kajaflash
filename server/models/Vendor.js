import mongoose from 'mongoose'

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
  phoneNumber: { type: String },
  address: { type: String },
  deliveryhours: { type: String },
  logo: { type: String },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
  openOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  closedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });

vendorSchema.methods.addMenuItem = function(itemID, cb) {
  this.menu.push(itemID);
  this.save(cb);
}

vendorSchema.methods.deleteMenuItem = function(itemID, cb) {
  let idx = this.menu.indexOf(itemID);
  this.menu.splice(idx, 1);
  this.save(cb);
}

vendorSchema.methods.addToOpenOrders= function(orderID, cb) {
  this.openOrders.push(orderID);
  this.save(cb);
}

vendorSchema.methods.closeOrder = function(orderID, cb) {
  let idx = this.openOrders.indexOf(orderID);
  this.openOrders.splice(idx, 1);
  this.closedOrders.push(orderID);
  this.save(cb);
}

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
