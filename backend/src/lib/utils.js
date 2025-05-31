import jwt from "jsonwebtoken"

export const generateToken = (userId,res) =>{

    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    
    res.cookie("jwt",token,{
        maxAge: 7 * 24 * 60 * 60 * 1000, //this is 7 days in milliseconds
        httpOnly: true, //means it can't be access by javascript or smthng and can only be accessed by http which prevents XSS attacks cross-site scriping attacks
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV != "development",  //HTTP/HTTPS,will be use during production
    });

    return token;
}