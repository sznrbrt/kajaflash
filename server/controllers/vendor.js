import VendorDB from '../models/Vendor'
import bcrypt from 'bcrypt'

class VendorAccount {
  static getProfile(req, res) {
    res.send(req.user || 'Something went wrong.');
  }

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
          logo: vendorObj.logo,
          deliveryhours: vendorObj.deliveryhours,
          password: hash
        })

        vendor.save((err3) => {
            res.status(err3 ? 400 : 200).send(err3 || "Successful registration!");
        })
      })
    })
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
    if(!id) return res.status(400).send('No id specified.')
    VendorDB.findById(id, (err, vendor) =>{
      res.status(err ? 400 : 200).send(err || vendor);
    })
  }

  static getAll(req, res) {
    VendorDB.find({}, (err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    }).populate('menu').select('-password');
  }

  static getList(req, res) {
    VendorDB.find({}, 'name logo deliveryhours',(err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    });
  }
}

class VendorAuth {
  static login(req, res) {
    console.log('You are in!');
    res.send(req.user);
  }

  static logout(req, res) {
    req.logout();
    res.send('You have logged out!');
  }
}

class DevHelp {
  static getAll(req, res) {
    VendorDB.find({}, (err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    }).populate('menu');
  }
}

export { DevHelp, VendorAccount, VendorAuth };
