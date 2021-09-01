const {StatusCodes} = require('http-status-codes');
const Post = require('../models/Post');
const User = require('../models/User');

const createPost = async (req, res) => {
    const {username, desc, title} = req.body;
    if(!username || !desc || !title) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'data format error'})
    try {
        const newPost = new Post(req.body);
        const post = await newPost.save();
        res.status(StatusCodes.CREATED).json(post)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.username !==  req.body.username) res.status(StatusCodes.NOT_FOUND).json({error:true,msg:'wrong user'});
        try {
            const updated = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true,runValidators: true});
            res.status(StatusCodes.OK).json(updated)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.username !==  req.body.username) res.status(StatusCodes.NOT_FOUND).json({error:true,msg:'wrong user'});
        try {
            const deleted = await Post.findByIdAndDelete(req.params.id);
            res.status(StatusCodes.OK).json(deleted)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

const getPosts = async (req, res) => {
    const username = req.query.user;
    const catname = req.query.cat;

    try {
        let posts;
        if(username) {
            posts = await Post.find({username});
        }else if(catname){
            posts = await Post.find({categories:{$in:[catname]}});
        }else{
            posts = await Post.find();
        }
        res.status(StatusCodes.OK).json(posts)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(StatusCodes.OK).json(post)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getPost
}