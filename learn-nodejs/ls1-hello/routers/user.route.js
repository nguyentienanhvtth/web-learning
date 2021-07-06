const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

router.get('/', userController.list);

router.get('/search', userController.search);

router.get('/create', userController.create);

router.post('/create', userController.postCreate);

module.exports = router;