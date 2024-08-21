import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import Post from '../models/post.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';


const getPosts = asyncHandler(async (req, res) => {
    try {
        const posts = await Post.find({});
        return res
            .status(200)
            .json(new ApiResponse(200, posts, 'All posts fetched successfully'));
    } 
    catch (error) {
        throw new ApiError(500, 'Fetching posts failed, please try again');
    }
})

const createPost = asyncHandler(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;        
        
        const imageFile = await uploadOnCloudinary(photo);
        
        if (!imageFile) {
            throw new ApiError(500, 'Unable to upload image, please try again');
        }

        const photoUrl = imageFile?.url;

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl,
        });

        return res
            .status(200)
            .json(new ApiResponse(200, newPost, 'Post created successfully'));
    } 
    catch (error) {
        throw new ApiError(500, 'Unable to create a post, please try again');
    }
})


export { getPosts, createPost };