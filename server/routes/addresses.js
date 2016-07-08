import express from 'express'
import { Address, DevHelp } from '../controllers/address'
import User from '../models/User'

const router = express.Router();

// API data/address/

router.route('/')
        .post(User.isLoggedIn, Address.create)
        .put(User.isLoggedIn, Address.edit)
        .delete(User.isLoggedIn, Address.delete)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
