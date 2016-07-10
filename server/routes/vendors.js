import express from 'express'
import Vendor from '../models/Vendor'
import { VendorAccount, DevHelp } from '../controllers/vendor'
import connectEnsure from 'connect-ensure-login'

const router = express.Router();

// API --> data/vendor/

router.route('/delete')
  .delete(VendorAccount.deleteAccount)

router.route('/profile')
  .get(connectEnsure.ensureLoggedIn('/'), VendorAccount.getProfile)
  .put(connectEnsure.ensureLoggedIn('/'), VendorAccount.editProfile)

router.route('/page')
  .get(connectEnsure.ensureLoggedIn('/'), VendorAccount.getVendorPage)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
