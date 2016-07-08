import UserDB from '../models/User';
import bcrypt from 'bcrypt';

class Account {
  static getProfile(req, res) {
    res.send(req.user);
  }

  static register(req, res) {
    let userObj = req.body;

    UserDB.findOne({email: userObj.email}, (err0, dbUser) => {
      if(err0 || dbUser) return cb(err0 || { error: 'Email not available.' })

      bcrypt.hash(userObj.password, 12, (err1, hash) => {
        if(err1) return cb(err1);

        var user = new UserDB({
          email: userObj.email,
          name: userObj.name,
          password: hash
        })

        user.save((err2) => {
          res.status(err2 ? 400 : 200).send(err2 || "Successful registration!");
        })
      })
    })
  }

  static deleteAccount(req, res) {
    let _id = req.query.id;
    UserDB.findByIdAndRemove(_id, (err) => {
      res.status(err ? 400 : 200).send(err || "Successfully deleted the user!");
    })
  }

  static editProfile(req, res) {
    let editedUserData = req.body;
    let userID = req.user._id;

    UserDB.findByIdAndUpdate(userID, { $set: editedUserData }, {new: true}, (err, editedUser) => {
      if(err) return res.status(400).send(err);
      res.send(editedUser);
    });
  }
}

class DevHelp {
  static getAll(req, res) {
    UserDB.find({}, (err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    });
  }
}

class Address {
  static addAddress(req, res) {
    UserDB.findById(req.user._id, (err0, user) => {
      if(err0) return res.status(400).send(err0);
      user.addresses.push(req.body);

      user.save((err1, editedUserData) => {
        if(err1) return res.status(400).send(err1);
        res.send(editedUserData)
      })
    })
  }

  static editAddress(req, res) {

    UserDB.findById(req.user._id, (err0, user) => {
      if(err0) return res.status(400).send(err0);

      let addressID = req.query.id;
      let newName = req.body.name;
      let newAddress = req.body.address;

      user.addresses = user.addresses.map((addressItem) => {
        console.log(addressItem._id.toString() === addressID.toString());
        if(addressItem._id.toString() === addressID.toString()) {
          return {
                   "name": newName || addressItem.name,
                   "address": newAddress || addressItem.address,
                   "_id":  addressItem._id
                 }
        } else {
          return addressItem;
        }
      })

      user.save((err1, editedUserData) => {
        if(err1) return res.status(400).send(err1);
        res.send(editedUserData);
      })
    });

  }

  static removeAddress(req, res) {
    UserDB.findById(req.user._id, (err0, user) => {
      if(err0) return res.status(400).send(err0);

      let addressID = req.query.id;
      user.addresses = user.addresses.filter((address) => {
        return address._id.toString() !== addressID.toString();
      })

      user.save((err1, editedUserData) => {
        if(err1) return res.status(400).send(err1);
        res.send(editedUserData)
      })
    })
  }
}

export { Account, DevHelp, Address };
