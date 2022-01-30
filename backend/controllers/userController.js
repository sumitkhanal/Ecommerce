const ErrorHandler = require("../utils/errorhandler")
const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Register a User

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password}= req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl",
        },
    });
    res.status(201).json({
        success:true,
        user,
    });
});
