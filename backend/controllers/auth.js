const express = require('express');
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get('/logout', logout);

module.exports = router;
