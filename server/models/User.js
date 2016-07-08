import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
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


userSchema.statics.isLoggedIn = function(req, res, next) {
  User.findById('577f19e0581ac569428e16d5', (err, _user) => {
    if(err) return res.status(400).send(err);
    req.user = _user;
    next();
  })
};

const User = mongoose.model('User', userSchema);

export default User;
