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


vendorSchema.statics.isLoggedIn = function(req, res, next) {
  // TESTING!!!
  Vendor.findById('577fe5fd05d56da94b4bfdd0', (err, vendor) => {
    if(err) return res.status(400).send(err)
    req.user = vendor;
    next();
  })
};

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
  console.log('VENDOR IDX', idx);
  this.openOrders.splice(idx, 1);
  this.closedOrders.push(orderID);
  console.log('VENDOR', this);
  this.save(cb);
}

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
