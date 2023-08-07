/* Create Express Router */
import express from 'express';
const router = express.Router();

import userModule from './modules/user';
import categoryModule from './modules/category';
import productModule from './modules/product';

router.use('/users', userModule);
router.use('/categories', categoryModule);
router.use('/products', productModule);

export default router;