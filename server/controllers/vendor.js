import VendorDB from '../models/Vendor'
import bcrypt from 'bcrypt'

class Account {
  static register(req, res) {
    let vendorObj = req.body;
    VendorDB.findOne({username: vendorObj.username}, (err0, dbVendor) => {
      if(err0 || dbVendor) return res.status(400).send(err0 || 'Username not available.')

      bcrypt.hash(vendorObj.password, 12, (err1, hash) => {
        if(err1) return res.status(400).send(err1)

        var vendor = new VendorDB({
          email: vendorObj.email,
          name: vendorObj.name,
          username: vendorObj.username,
          password: hash
        })

        vendor.save((err3) => {
            res.status(err3 ? 400 : 200).send(err3 || "Successful registration!");
        })
      })
    })
  }

  static getProfile(req, res) {
    res.send(req.user);
  }

  static editProfile(req, res) {
    let editedVendorData = req.body;
    let userID = req.user._id;

    VendorDB.findByIdAndUpdate(userID, { $set: editedVendorData }, {new: true}, (err, editedVendor) => {
      if(err) return res.status(400).send(err);
      res.send(editedVendor);
    });
  }

  static deleteAccount(req, res) {
    let _id = req.query.id;
    VendorDB.findByIdAndRemove(_id, (err) => {
      res.status(err ? 400 : 200).send(err || "Successfully deleted the vendor!");
    })
  }

  static getVendorPage(req, res) {
    let id = req.query.id;

    VendorDB.findById(id, (err, vendor) =>{
      res.status(err ? 400 : 200).send(err || vendor);
    })
  }
}

class Item {
  static addItem(req, res) {
    VendorDB.findById(req.user._id, (err0, user) => {
      if(err0) return res.status(400).send(err0);
      user.items.push(req.body);

      user.save((err1, editedVendorData) => {
        if(err1) return res.status(400).send(err1);
        res.send(editedVendorData);
      })
    })
  }

  static removeItem(req, res) {
    VendorDB.findById(req.user._id, (err0, vendor) => {
      if(err0) return res.status(400).send(err0);

      let itemID = req.query.id;

      vendor.items = vendor.items.filter((item) => {
        return item._id.toString() !== itemID.toString();
      })

      vendor.save((err1, editedVendorData) => {
        if(err1) return res.status(400).send(err1);
        res.send(editedVendorData)
      })
    })
  }
}

class DevHelp {
  static getAll(req, res) {
    VendorDB.find({}, (err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    }).populate('menu');
  }
}

export { DevHelp, Account, Item };
