const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter product Name"],
        trim: true
    },
    description:{
        type: String,
        required:[true,"Please Enter product Description"]
    },
    price:{
        type: Number,
        reqired:[true, "please Enter product Price"],
        maxLength:[8,"Price cannot exceed 8 figures"]
    },
    rating:{
        type: Number,
        default:0
    },
    images:[
        {
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    }
    ],
    category:{
        type: String,
        required:[true,"Please Enter Product Category"],
        
    },
    Stock:{
        type: Number,
        required:[true,"Please Enter product Stock"],
        maxLength:[4,"Stock canot exceed 4 characters"],
        default:1
    },
    numOfRevies:{
        type: Number,
        default:0
    },
    reviews:[
        {
            name:{
                type: String,
                reqired:true,
            },
            rating:{
                type: Number,
                reqired: true,
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    createAt:{
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);