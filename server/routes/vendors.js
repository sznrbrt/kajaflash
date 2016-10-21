import express from 'express'
import Vendor from '../models/Vendor'
import { VendorAccount, DevHelp } from '../controllers/vendor'
import connectEnsure from 'connect-ensure-login'
import Auth from '../middlewares/auth'

const router = express.Router();

// API --> data/vendor/

router.route('/delete')
  .delete(Auth.isAuthorized('admin'), VendorAccount.deleteAccount)

router.route('/profile')
  .get(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('vendor'), VendorAccount.getProfile)
  .put(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('vendor'), VendorAccount.editProfile)

router.route('/page')
  .get(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), VendorAccount.getVendorPage)

router.route('/restaurants')
        .get(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), VendorAccount.getList)


// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
