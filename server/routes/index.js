import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './users';
import vendorRoutes from './vendors';

const jsonParser = bodyParser.json();
const router = express.Router();

// API /data

router.use('/user', userRoutes);
router.use('/vendor', vendorRoutes);

export default router;
