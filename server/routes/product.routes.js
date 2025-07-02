import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

/**
 * @route GET /api/products
 * @group Products - Operations about products
 * 
 * @returns {Array.<Product>} 200 - An array of product objects
 * @returns {Error}  500 - Unexpected error
 * 
 * @description Fetches all products from the database and returns them as a JSON array.
 */
router.get("/", async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();

        // Respond with the array of products in JSON format
        res.status(200).json(products);
    } catch (err) {
        // Log the error for debugging
        console.error('Error fetching products:', err);
        // Respond with a 500 status and error message
        res.status(500).json({ error: err?.message || 'Internal Server Error' });
    }
});

export default router;
