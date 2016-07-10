import express from 'express';
import passport from 'passport';

import { Auth, Account } from '../controllers/user';
import { VendorAuth, VendorAccount } from '../controllers/vendor';

const router = express.Router();

// Local authentication

// User
router.route('/local/register')
  .post(Account.register);

router.route('/local/login')
  .post(passport.authenticate('user-local'), Auth.login);

router.route('/local/logout')
  .delete(Auth.logout);

// Vendor
router.route('/local/vendorRegister')
  .post(VendorAccount.register);

router.route('/local/vendorLogin')
  .post(passport.authenticate('vendor-local'), VendorAuth.login);

router.route('/local/vendorLogout')
  .delete(VendorAuth.logout);


export default router;
