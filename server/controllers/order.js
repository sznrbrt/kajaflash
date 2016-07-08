import OrderDB from '../models/Order'
import VendorDB from '../models/Vendor'
import UserDB from '../models/User'

class Order {
  static create(req, res){
    let now = new Date();
    let order = new OrderDB({
      "createdAt": now,
      "items": req.body.items,
      "totalAmount": req.body.totalAmount,
      "comment": req.body.comment,
      "customer": req.user._id,
      "vendor": req.body.vendorId,
      "deliveryAddress": req.body.addressID,
    })

    order.save((err0, order) => {
      if(err0) return res.status(400).send(err0);
      VendorDB.findById(req.body.vendorId, (err1, vendor) => {
        if(err1) return res.status(400).send(err1);
        vendor.addToOpenOrders(order._id, (err2) => {
          if(err2) return res.status(400).send(err2);
          UserDB.findById(req.user._id, (err3, user) => {
            if(err3) return res.status(400).send(err3);
            user.addToOpenOrders(order._id, (err4) => {
              if(err4) return res.status(400).send(err4);
              res.send(order);
            })
          })
        })
      })
    })
  }

  static changeStatus(req, res){
    let orderID = req.query.id;
    let status = req.query.status;
    OrderDB.findById(orderID, (err0, order) => {
      if(err0) return res.status(400).send(err0);

      order.checkout(status, (err1, checkedoutOrder) => {
        res.status(err1 ? 400 : 200).send(err1 || checkedoutOrder);
      })
    })
  }

}

class DevHelp {
  static getAll(req, res) {
    OrderDB.find({}, (err, orders) => {
      res.status(err ? 400 : 200).send(err || orders);
    }).populate('items');
  }
}

export { Order, DevHelp };
