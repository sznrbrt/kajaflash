import express from 'express'
import { Address, DevHelp } from '../controllers/address'
import User from '../models/User'
import connectEnsure from 'connect-ensure-login'
import Auth from '../middlewares/auth'

const router = express.Router();

// API data/address/

router.route('/')
        .post(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Address.create)
        .put(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Address.edit)
        .delete(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('user'), Address.delete)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
