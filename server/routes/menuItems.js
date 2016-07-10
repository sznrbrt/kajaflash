import express from 'express'
import { Item, DevHelp } from '../controllers/menuItem'
import Vendor from '../models/Vendor'
import connectEnsure from 'connect-ensure-login'

const router = express.Router();

// API data/menuItem/

router.route('/')
        .post(connectEnsure.ensureLoggedIn('/'), Item.create)
        .put(connectEnsure.ensureLoggedIn('/'), Item.edit)
        .delete(connectEnsure.ensureLoggedIn('/'), Item.delete)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
