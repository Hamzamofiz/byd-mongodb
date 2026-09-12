const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'StoreProduct',
                required: true
            },
            title: String,
            image: String,
            price: Number,
            qty: {
                type: Number,
                default: 1,
                min: 1
            }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);
