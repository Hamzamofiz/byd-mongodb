const express = require('express');
const router = express.Router();
const StoreProduct = require('../models/storeProducts');
const auth = require('../middleware/auth');

// Get all store products
router.get('/', async (req, res) => {
    try {
        const products = await StoreProduct.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Seed store products — remove old seed at bottom
router.delete('/seed-remove', async (req, res) => {
    res.json({ message: 'use POST /seed' })
});

// Get single store product
router.get('/:id', async (req, res) => {
    try {
        const product = await StoreProduct.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create store product
router.post('/', auth, async (req, res) => {
    try {
        const product = await StoreProduct.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update store product
router.put('/:id', auth, async (req, res) => {
    try {
        const product = await StoreProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete store product
router.delete('/:id', auth, async (req, res) => {
    try {
        const product = await StoreProduct.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Seed store products
router.post('/seed', async (req, res) => {
    try {
        const items = [
            { title: "BYD 7kW Home Wallbox Charger", category: "Chargers", price: 85000, description: "Home EV charging station compatible with all BYD models.", image: "/charging-sec-img-1.webp", inStock: true },
            { title: "All-Weather Floor Mats", category: "Accessories", price: 12000, description: "Custom fit all-weather floor mats for BYD vehicles.", image: "/floormate.webp", inStock: true },
            { title: "Smart Remote Key Fob", category: "Accessories", price: 8500, description: "Genuine BYD smart remote key fob and accessories.", image: "/accessirios.webp", inStock: true },
            { title: "BYD Hoodie", category: "Apparel", price: 4500, description: "Official BYD branded hoodie.", image: "/hoodie.jpg", inStock: true },
            { title: "BYD Polo Shirt", category: "Apparel", price: 3000, description: "Official BYD branded polo shirt.", image: "/polo.jpg", inStock: true },
            { title: "BYD Water Bottle", category: "Lifestyle", price: 1500, description: "Official BYD branded stainless steel water bottle.", image: "/bottel.jpg", inStock: true },
        ];
        await StoreProduct.insertMany(items);
        res.json({ message: 'Store products seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
