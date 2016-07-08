import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './users'
import vendorRoutes from './vendors'
import menuItemRoutes from './menuItems'
import addressRoutes from './addresses'
import orderRoutes from './orders'

const jsonParser = bodyParser.json();
const router = express.Router();

// API /data

router.use('/user', userRoutes);
router.use('/vendor', vendorRoutes);
router.use('/menuItem', menuItemRoutes);
router.use('/address', addressRoutes);
router.use('/order', orderRoutes);

export default router;
