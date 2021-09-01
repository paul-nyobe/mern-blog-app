require('dotenv').config();
const express = require('express');
const connectDb = require('./db/connect');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const CatRouter = require('./routes/categories');

const app = express();

// middlewares
app.use(express.json());

// auth routes
app.use('/api/v1/auth', authRouter);

// users routes
app.use('/api/v1/users', userRouter); 

// users routes
app.use('/api/v1/posts', postRouter);

// categories routes
app.use('/api/v1/categories', CatRouter);

const port = process.env.PORT || 5000;
const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URL);
        app.listen(port, ()=>{
            console.log('mongo db connected...');
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};
start(); 
