import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt //used Cookie Parser for it
        if(!token){
            return res.status(401).json({message: "Unauthorized - No token Provided"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({message:"Unauthorized - Invalid token"});
        }
        const user = await User.findById(decoded.userId).select("-password"); //Deselect the password because we do not want to send the password back(Unsecure)
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        req.user = user;
        next(); //Call the next function
    } catch (error) {
        console.log("Error in protectRoute middleware",error.message);
        return res.status(500).json({message:"Internal Server Error"});
    }
} 