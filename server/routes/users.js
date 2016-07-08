import express from 'express'
import User from '../models/User'
import { Account, DevHelp } from '../controllers/user'

const router = express.Router();

// API data/user/

router.route('/profile')
  .get(User.isLoggedIn, Account.getProfile)
  .put(User.isLoggedIn, Account.editProfile)

router.route('/register').post(Account.register)

router.route('/delete').delete(Account.deleteAccount)


// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
