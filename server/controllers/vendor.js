import VendorDB from '../models/Vendor'

class Account {
  static register(req, res) {
    VendorDB.register(req.body, err => {
      res.status(err ? 400 : 200).send(err || "Successful registration!");
    });
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

  static editItem(req, res) {

    VendorDB.findById(req.user._id, (err0, vendor) => {
      if(err0) return res.status(400).send(err0);

      let itemID = req.query.id;
      let newName = req.body.name;
      let newPrice = req.body.price;
      let newDesc = req.body.desc;
      let newImage = req.body.image;

      vendor.items = vendor.items.map((item) => {
        console.log(item._id.toString() === itemID.toString());
        if(item._id.toString() === itemID.toString()) {
          return {
                   "name": newName || item.name,
                   "price": newPrice || item.price,
                   "desc": newDesc || item.desc,
                   "image": newImage || item.image,
                   "_id":  item._id
                 }
        } else {
          return item;
        }
      })

      vendor.save((err1, editedVendorData) => {
        if(err1) return res.status(400).send(err1);
        res.send(editedVendorData);
      })
    });

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
    });
  }
}

export { DevHelp, Account, Item };
