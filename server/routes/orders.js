import express from 'express'
import { Order, DevHelp } from '../controllers/order'
import User from '../models/User'
import connectEnsure from 'connect-ensure-login'
import Auth from '../middlewares/auth'

const router = express.Router();

// API --> data/order

router.route('/')
        .post(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Order.create)
        .put(connectEnsure.ensureLoggedIn('/'), Order.changeStatus)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
