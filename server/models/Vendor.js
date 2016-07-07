import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
  phoneNumber: { type: String },
  address: { type: String },
  deliveryhours: { type: String },
  logo: { type: String },
  items: [
    {
      name: { type: String },
      price: { type: Number },
      desc: { type: String },
      image: { type: String }
    }
  ],
  openOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  closedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });


vendorSchema.statics.isLoggedIn = function(req, res, next) {
  req.user =    {
                  "_id": "577ecf7666f553393939505a",
                  "updatedAt": "2016-07-07T21:53:58.329Z",
                  "createdAt": "2016-07-07T21:53:58.329Z",
                  "email": "bob@burger.com",
                  "name": "Bob's burger",
                  "username": "boburger",
                  "password": "$2a$12$QWaj1vJ/Ka2tb7.rkhjs6O4AO3k6hMHqMbVGMZy/6Gqbz3agka6Kq",
                  "__v": 0,
                  "closedOrders": [],
                  "openOrders": [],
                  "items": []
                };
  next();
};

vendorSchema.statics.register = function(vendorObj, cb) {
  Vendor.findOne({username: vendorObj.username}, (err, dbVendor) => {
    if(err || dbVendor) return cb(err || { error: 'Username not available.' })

    bcrypt.hash(vendorObj.password, 12, (err, hash) => {
      if(err) return cb(err);

      var vendor = new Vendor({
        email: vendorObj.email,
        name: vendorObj.name,
        username: vendorObj.username,
        password: hash
      })

      vendor.save(cb)
    })
  })
};

const Vendor = mongoose.model('Vendor', vendorSchema);

export default mongoose.model('Vendor', vendorSchema);
