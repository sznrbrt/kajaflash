import express from 'express'
import User from '../models/User'
import { Account, DevHelp } from '../controllers/user'
import connectEnsure from 'connect-ensure-login'

const router = express.Router();

// API data/user/

router.route('/profile')
  .get(connectEnsure.ensureLoggedIn('/'), Account.getProfile)
  .put(connectEnsure.ensureLoggedIn('/'), Account.editProfile)

// takes id of the target profile as query parameter - req.query.id
router.route('/delete')
  .delete(connectEnsure.ensureLoggedIn('/'), Account.deleteAccount)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
