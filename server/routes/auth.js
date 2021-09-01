const router = require('express').Router();
const {registerUser, login} = require('../controllers/users');


// @action post
// @route api/v1/auth/register
// @desc creating a new user
router.route('/register').post(registerUser);

// @action post
// @route api/v1/auth/login
// @desc login a user
router.route('/login').post(login);

module.exports = router;