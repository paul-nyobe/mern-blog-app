const router = require('express').Router();
const {
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getPost
} = require('../controllers/posts')

// @action post
// @route api/v1/posts
router.route('/').post(createPost).get(getPosts);

// @action put
// @route api/v1/posts/:id
router.route('/:id').put(updatePost).get(getPost).delete(deletePost);

module.exports = router;