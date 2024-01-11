const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        profilePic: {
            type: String,
            required: true,
            default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        }
    }
)