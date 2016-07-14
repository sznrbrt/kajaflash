import express from 'express'
import User from '../models/User'
import { Account, DevHelp } from '../controllers/user'
import connectEnsure from 'connect-ensure-login'
import Auth from '../middlewares/auth'

const router = express.Router();

// API data/user/

router.route('/profile')
  .get(testMiddleware, connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Account.getProfile)
  .put(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Account.editProfile)

// takes id of the target profile as query parameter - req.query.id
router.route('/delete')
  .delete(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Account.deleteAccount)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;

function testMiddleware(req, res, next) {
  console.log('headers', req.headers);
  next();
}
