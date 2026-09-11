const mongoose = require('mongoose');

const OderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            productName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmont:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
},{timestamps: true})

module.exports = mongoose.model("Order",OderSchema);