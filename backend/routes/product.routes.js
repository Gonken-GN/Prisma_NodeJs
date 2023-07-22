/**
 * Programmer: Raden Fadhil Anugerah Ardiwilaga
 * Filename: 17 June 2023
 * Contact: fadhilanugrah21@upi.edu
 * Date: server.js
 * Description: This is the code for running the servers
 * */

import express from 'express';
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controllers.js';
// import { verifyUser } from '../middleware/auth.middleware.js';
// import { verifyTokenAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
