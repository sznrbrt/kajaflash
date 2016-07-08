import express from 'express'
import Vendor from '../models/Vendor'
import { Account, DevHelp, Item } from '../controllers/vendor'

const router = express.Router();

// API data/vendor/

router.route('/register').post(Account.register)

router.route('/delete').delete(Account.deleteAccount)

router.route('/profile')
  .get(Vendor.isLoggedIn, Account.getProfile)
  .put(Vendor.isLoggedIn, Account.editProfile)

router.route('/page').get(Vendor.isLoggedIn, Account.getVendorPage)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
