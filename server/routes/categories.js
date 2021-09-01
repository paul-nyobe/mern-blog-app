const router = require('express').Router();
const {
    createCat,
    updateCat,
    deleteCat,
    getCategories,
    getCategory
} = require('../controllers/categories')

// @action post
// @route api/v1/posts
router.route('/').post(createCat).get(getCategories);

// @action put
// @route api/v1/posts/:id
router.route('/:id').put(updateCat).get(getCategory).delete(deleteCat); 

module.exports = router;