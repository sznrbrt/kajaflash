import MenuItemDB from '../models/MenuItem'
import VendorDB from '../models/Vendor'

class Item {
  static create (req, res) {
    let menuItem = new MenuItemDB({
      "name": req.body.name,
      "owner": req.user._id,
      "image": req.body.image,
      "price": req.body.price,
      "desc": req.body.desc
    })

    menuItem.save((err0, menuItem) => {
      if(err0) return res.status(400).send(err0);
      req.user.addMenuItem(menuItem._id, (err1) => {
        res.status(err1 ? 400 : 200).send(err1 || menuItem);
      });
    })
  }

  static edit (req, res) {
    let editedMenuItem = req.body;
    let menuItemID = req.query.id;

    if(req.user.menu.indexOf(menuItemID) === -1) res.status(400).send({ err: 'Unauthorized edit. You\'re not the owner.' })

    MenuItemDB.findByIdAndUpdate(menuItemID, { $set: editedMenuItem }, {new: true}, (err, editedMenuItem) => {
      if(err) return res.status(400).send(err);
      res.send(editedMenuItem);
    });
  }

  static delete (req, res) {
    let _id = req.query.id;

    if(req.user.menu.indexOf(_id) === -1) res.status(400).send({ err: 'Unauthorized delete. You\'re not the owner.' })

    MenuItemDB.findByIdAndRemove(_id, (err0) => {
      if(err0) return res.status(400).send(err0);
      req.user.deleteMenuItem(_id, (err1) => {
        res.status(err1 ? 400 : 200).send(err1 || "Successfully deleted the menu item!");
      });
    })
  }
}

class DevHelp {
  static getAll(req, res) {
    MenuItemDB.find({}, (err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    });
  }
}

export { Item, DevHelp };
