import express from 'express'
import { Item, DevHelp } from '../controllers/menuItem'
import Vendor from '../models/Vendor'
import connectEnsure from 'connect-ensure-login'
import Auth from '../middlewares/auth'

const router = express.Router();

// API data/menuItem/

router.route('/')
        .post(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('vendor'), Item.create)
        .put(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('vendor'), Item.edit)
        .delete(connectEnsure.ensureLoggedIn('/'), Auth.isAuthorized('vendor'), Item.delete)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
