import OrderDB from '../models/Order'
import VendorDB from '../models/Vendor'
import UserDB from '../models/User'

class Order {
  static create(req, res){
    if(!req.body.vendorId) res.status(400).send({ err: 'Incomplete request data.' })

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

    if(status !== 'processed' && status !== 'cooked' &&
       status !== 'underDelivery' && status !== 'cancelled' &&
       status !== 'delivered') return res.status(400).send('Wrong status format. Please, send status as query parmeter')

    if(!status) return res.status(400).send('No status specified. Please, send status as query parmeter')
    if(status === 'processed' && req.user.role !== 'vendor') return res.status(400).send({err: 'Unauthorized checkout. You must be a vendor to process orders.'})
    else if (status === 'cooked' && req.user.role !== 'vendor') return res.status(400).send({err: 'Unauthorized checkout. You must be a vendor to process orders.'})
    else if (status === 'underDelivery' && req.user.role !== 'vendor') return res.status(400).send({err: 'Unauthorized checkout. You must be a vendor to process orders.'})
    else if (status === 'cancelled' && req.user.role !== 'vendor') return res.status(400).send({err: 'Unauthorized checkout. You must be a vendor to process orders.'})

    if(status === 'delivered' || status === 'cancelled') {
      OrderDB.findById(orderID, (err0, order) => {
        if(err0) return res.status(400).send(err0);
        order.checkout(status, (err1, checkedoutOrder) => {
          UserDB.findById(order.customer, (err2, user) => {
            if(err2) return res.status(400).send(err2);
            user.closeOrder(orderID, (err3) => {
              if(err3) return res.status(400).send(err3);
              VendorDB.findById(order.vendor, (err4, vendor) => {
                if(err4) return res.status(400).send(err4);
                vendor.closeOrder(orderID, (err5) => {
                  if(err5) return res.status(400).send(err5);
                  res.send(checkedoutOrder);
                })
              })
            })
          })
        })
      })
    } else {
      OrderDB.findById(orderID, (err0, order) => {
        if(err0) return res.status(400).send(err0);
        order.checkout(status, (err1, checkedoutOrder) => {
          res.status(err1 ? 400 : 200).send(err1 || checkedoutOrder);
        })
      })
    }
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
