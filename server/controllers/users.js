const {StatusCodes} = require('http-status-codes');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');

const registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'data format error'})
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt);
        const newUser = new User({username, email, password:hashedpass});
        const user = await newUser.save();
        user.password = password;
        res.status(StatusCodes.CREATED).json(user)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username ||  !password) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'missing credentials'})
    try {
        const user = await User.findOne({username});
        if(!user) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'wrong credentials'});
        const match = bcrypt.compareSync(password, user.password);
        if(!match) return res.status(StatusCodes.BAD_REQUEST).json({error:true,msg:'wrong credentials'});
        res.status(StatusCodes.OK).json({user})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const updateUser = async (req, res) => {

    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body},{
                new: true,
                runValidators: true,
            })
            res.status(StatusCodes.OK).json(updatedUser)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }else{
        res.status(StatusCodes.UNAUTHORIZED).json({error:true,msg:'account not corresponding'})
    }
}

const deleteUser = async (req, res) => {

    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id);
            if(!user) res.status(StatusCodes.NOT_FOUND).json({error:true,msg:'user not found'});
            try {
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(StatusCodes.OK).json('user deleted successfuly')
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
            }
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
        
    }else{
        res.status(StatusCodes.UNAUTHORIZED).json({error:true,msg:'account not corresponding'})
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) res.status(StatusCodes.NOT_FOUND).json({error:true,msg:'user not found'});
        const {password,...other} = user._doc;
        res.status(StatusCodes.OK).json(other);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}

module.exports = {
    registerUser,
    login,
    updateUser,
    deleteUser,
    getUser
}