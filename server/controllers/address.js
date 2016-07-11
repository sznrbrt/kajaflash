import AddressDB from '../models/Address'

class Address {
  static create (req, res) {
    let address = new AddressDB({
      "name": req.body.name,
      "owner": req.user._id,
      "address": req.body.address
    })

    address.save((err0, address) => {
      if(err0) return res.status(400).send(err0);
      req.user.addAddress(address._id, (err1) => {
        res.status(err1 ? 400 : 200).send(err1 || address);
      });
    })
  }

  static edit (req, res) {
    let editedAddressItem = req.body;
    let addressID = req.query.id;

    if(req.user.addresses.indexOf(addressID) === -1) res.status(400).send({ err: 'Unauthorized edit. You\'re not the owner.' })

    AddressDB.findByIdAndUpdate(addressID, { $set: editedAddressItem }, {new: true}, (err, editedAddressItem) => {
      if(err) return res.status(400).send(err);
      res.send(editedAddressItem);
    });
  }

  static delete (req, res) {
    let _id = req.query.id;

    if(req.user.addresses.indexOf(_id) === -1) res.status(400).send({ err: 'Unauthorized delete. You\'re not the owner.' })

    AddressDB.findByIdAndRemove(_id, (err0) => {
      if(err0) return res.status(400).send(err0);
      req.user.deleteAddress(_id, (err1) => {
        res.status(err1 ? 400 : 200).send(err1 || "Successfully deleted the address item!");
      });
    })
  }
}

class DevHelp {
  static getAll(req, res) {
    AddressDB.find({}, (err, addresses) => {
      res.status(err ? 400 : 200).send(err || addresses);
    }).populate('menu');
  }
}

export { Address, DevHelp };
