/* Create Express Router */
import express from 'express';
const router = express.Router();

import userModule from './modules/user';
import categoryModule from './modules/category';
import productModule from './modules/product';
import purchaseModule from './modules/purchase';
import receiptModule from './modules/receipt';

router.use('/users', userModule);
router.use('/categories', categoryModule);
router.use('/products', productModule);
router.use('/purchase', purchaseModule);
router.use('/receipts', receiptModule);

export default router;