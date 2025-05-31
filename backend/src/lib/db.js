import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB Connected")
    } catch (error) {
        console.log("MONGODB connection error:",error);
    }
};