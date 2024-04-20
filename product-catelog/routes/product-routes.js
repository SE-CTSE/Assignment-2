// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.js');

// Create Product
router.post('/', productController.createProduct);

// Get Product by ID
router.get('/:id', productController.getProductById);

module.exports = router;
