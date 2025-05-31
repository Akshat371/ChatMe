import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    {timestamps: true}
);
//Name of model/collection
//Mongoose will conver User into users because it expects to take a a singular entity
const User  = mongoose.model("User",userSchema);
export default User;