const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create product
router.post('/', auth, async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update product
router.put('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete product
router.delete('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Seed BYD cars
router.post('/seed', async (req, res) => {
    try {
        const bydCars = [
            { name: "BYD Seal", price: 14500000, discription: "Luxury EV Sedan", rangekm: 570, image: "/byd-seal-main.webp" },
            { name: "BYD Atto 3", price: 11800000, discription: "Dynamic EV SUV", rangekm: 420, image: "/atto-3.webp" },
            { name: "BYD Atto 2", price: 9800000, discription: "Compact EV SUV", rangekm: 320, image: "/atto-2.webp" },
            { name: "BYD Sealion 7", price: 12500000, discription: "Plug-in Hybrid SUV", rangekm: 1100, image: "/sealion-7.webp" },
            { name: "BYD Shark 6", price: 16000000, discription: "Performance EV Pickup", rangekm: 800, image: "/byd-shark-angle.webp" }
        ];
        await Product.insertMany(bydCars);
        res.json({ message: 'BYD cars seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
