import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  password: { type: String, required: true },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
  openOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  closedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });


userSchema.statics.isLoggedIn = function(req, res, next) {
  User.findById('577fe59e153581824b5dae06', (err, _user) => {
    if(err) return res.status(400).send(err);
    req.user = _user;
    next();
  })
};

userSchema.methods.addAddress = function(addressID, cb) {
  this.addresses.push(addressID);
  this.save(cb);
}

userSchema.methods.deleteAddress = function(addressID, cb) {
  let idx = this.addresses.indexOf(addressID);
  this.addresses.splice(idx, 1);
  this.save(cb);
}

userSchema.methods.addToOpenOrders= function(orderID, cb) {
  this.openOrders.push(orderID);
  this.save(cb);
}

userSchema.methods.closeOrder = function(orderID, cb) {
  let idx = this.openOrders.indexOf(orderID);
  this.openOrders.splice(idx, 1);
  this.closedOrders.push(orderID);
  this.save(cb);
}

const User = mongoose.model('User', userSchema);

export default User;
