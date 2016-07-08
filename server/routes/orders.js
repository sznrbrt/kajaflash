import express from 'express'
import { Order, DevHelp } from '../controllers/order'
import User from '../models/User'

const router = express.Router();

// API data/order/

router.route('/')
        .post(User.isLoggedIn, Order.create)
        .put(User.isLoggedIn, Order.changeStatus)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
