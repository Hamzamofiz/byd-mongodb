// const { type } = require('firebase/firestore/pipelines');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    discription :{
        type : String,
        required : true
    },
    rangekm:{
        type : Number,
        required : true
    },
    image:{
        type : String ,
        require : true
    }
},{timestamps : true});

module.exports = mongoose.model("Product",ProductSchema);