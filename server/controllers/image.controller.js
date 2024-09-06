import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';


const getImage = asyncHandler(async (req, res) => {
    try {
        const { prompt } = req.body;
        
        const width = 1024;
        const height = 1034;
        const seed = 42;
        const model = 'flux';
        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}&nologo=true&enhance=true`;
    
        const response = await fetch(imageUrl);
        const arrayBuffer = await response.arrayBuffer();
        const image = Buffer.from(arrayBuffer).toString('base64');
        
        return res
            .status(200)
            .json(new ApiResponse(200, { photo: image }, 'Image fetched successfully'));
    } 
    catch (error) {
        throw new ApiError(500, error?.response.data.error.message || 'Something went wrong');
    }
})

export { getImage };