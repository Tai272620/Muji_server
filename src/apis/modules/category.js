import express from 'express';
const router = express.Router();

import categoryController from '../../controllers/category.controller';

router.get("/:category_id", categoryController.findByCategory);

export default router;