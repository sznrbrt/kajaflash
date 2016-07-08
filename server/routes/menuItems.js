import express from 'express'
import { Item, DevHelp } from '../controllers/menuItem'
import Vendor from '../models/Vendor'

const router = express.Router();

// API data/menuItem/

router.route('/')
        .post(Vendor.isLoggedIn, Item.create)
        .put(Vendor.isLoggedIn, Item.edit)
        .delete(Vendor.isLoggedIn, Item.delete)

// only for development
router.route('/all')
        .get(DevHelp.getAll)

export default router;
