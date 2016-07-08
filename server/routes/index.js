import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './users'
import vendorRoutes from './vendors'
import menuItemRoutes from './menuItems'

const jsonParser = bodyParser.json();
const router = express.Router();

// API /data

router.use('/user', userRoutes);
router.use('/vendor', vendorRoutes);
router.use('/menuItem', menuItemRoutes);

export default router;
