import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

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
  req.user =   {
                "_id": "577db77930e62e0730266ea7",
                "updatedAt": "2016-07-07T02:04:19.755Z",
                "createdAt": "2016-07-07T01:59:21.227Z",
                "email": "bob@bobek.bo",
                "name": "bob",
                "password": "$2a$12$EpsczDFNUXE7.6Y4PRDHRe7eQeGu/hF9E6LrZLyqWl4Oeels4s2fe",
                "__v": 0,
                "orders": [],
                "addresses": []
              };
  next();
};

userSchema.statics.register = function(userObj, cb) {
  User.findOne({email: userObj.email}, (err, dbUser) => {
    if(err || dbUser) return cb(err || { error: 'Email not available.' })

    bcrypt.hash(userObj.password, 12, (err, hash) => {
      if(err) return cb(err);

      var user = new User({
        email: userObj.email,
        name: userObj.name,
        password: hash
      })

      user.save(cb)
    })
  })
};

const User = mongoose.model('User', userSchema);

export default mongoose.model('User', userSchema);
