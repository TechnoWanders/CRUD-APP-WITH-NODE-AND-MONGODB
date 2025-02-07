const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },

        quantity:{
            type: Number,
            required:true,
        },

        price:{
            type: Number,
            required: true,
        },
    },{
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;