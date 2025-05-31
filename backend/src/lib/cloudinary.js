import {v2 as cloudinary} from "cloudinary" //v2-variable code

import {config} from "dotenv"

config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

});
 // default export:we can import it without curly braces: import {specificname} ❌ import anyname ✅
export default cloudinary;
