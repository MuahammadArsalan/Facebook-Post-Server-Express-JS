import Post from '../models/post.model.js'
import User from '../models/user.model.js'

const createPost = async (req,res) => {

const  {title , description} = req.body;

//create post
const post = await Post.create({
    title,
    description
})



res.json({message:"Post created successfully",
    data:post
})

    
}

//get all posts
const getAllPosts = async (req,res) => {
let allPosts;
 allPosts = await Post.find({}).populate("likedBy").populate("shareBy").populate("commentBy")

res.json(allPosts)


} 

export {createPost,getAllPosts}
