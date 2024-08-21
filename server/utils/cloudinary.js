import { v2 as cloudinary } from "cloudinary";
import * as dotenv from 'dotenv';
dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (photoFile) => {
    try {
        if(!photoFile) return null
    
        const response = await cloudinary.uploader.upload(photoFile, {
            resource_type: "image"
        })
        
        return response
        
    } catch (error) {
        return null
    }
}

export {uploadOnCloudinary} 