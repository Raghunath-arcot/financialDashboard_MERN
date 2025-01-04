import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

// for schema check data modeling




const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            Currency: "USD",
            get: (v) => v / 100 //this is formula and this is how mongoose currecny works
        },
        expense: {
            type: mongoose.Types.Currency,
            Currency: "USD",
            get: (v) => v / 100 
        },
        transactions: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction", //referring to the transaction object created in models folder Transaction.js
        },
    ],
        
    },
    {timestamps: true, toJSON: {getters: true}}
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;