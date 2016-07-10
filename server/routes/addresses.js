import express from 'express'
import { Address, DevHelp } from '../controllers/address'
import User from '../models/User'
import connectEnsure from 'connect-ensure-login'

const router = express.Router();

// API data/address/

router.route('/')
        .post(connectEnsure.ensureLoggedIn('/'), Address.create)
        .put(connectEnsure.ensureLoggedIn('/'), Address.edit)
        .delete(connectEnsure.ensureLoggedIn('/'), Address.delete)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
