const router = require('express').Router();
const {updateUser, deleteUser, getUser} = require('../controllers/users');

// @action get/post/delete
// @route api/v1/users/:id
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


module.exports = router;