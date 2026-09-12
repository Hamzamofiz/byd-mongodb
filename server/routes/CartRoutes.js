const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const auth = require('../middleware/auth');

// Get user's cart
router.get('/', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id });
        res.json(cart || { items: [] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add item to cart
router.post('/add', auth, async (req, res) => {
    try {
        const { product, title, image, price } = req.body;
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            cart = new Cart({ user: req.user.id, items: [] });
        }

        const existingItem = cart.items.find(i => i.product.toString() === product);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.items.push({ product, title, image, price, qty: 1 });
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update item quantity
router.put('/update/:productId', auth, async (req, res) => {
    try {
        const { qty } = req.body;
        const cart = await Cart.findOne({ user: req.user.id });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const item = cart.items.find(i => i.product.toString() === req.params.productId);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        if (qty < 1) {
            cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
        } else {
            item.qty = qty;
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Remove item from cart
router.delete('/remove/:productId', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Clear cart
router.delete('/clear', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id });
        if (cart) {
            cart.items = [];
            await cart.save();
        }
        res.json({ items: [] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
