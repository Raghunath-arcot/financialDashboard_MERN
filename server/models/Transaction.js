import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

// for schema check data modeling




const TransactionSchema = new Schema(
    {
        buyer: {
            type: String,
            required: true,
            
        },
        amount: {
            type: mongoose.Types.Currency,
            Currency: "USD",
            get: (v) => v / 100 
        },
        productIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product", //referring to the transaction object 
        }],
        
    },
    {timestamps: true, toJSON: {getters: true}}
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;