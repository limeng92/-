'use strict';
const express = require('express')
const User = require('../app/admin/controller/userController')
const CheckUser = require('../middlewares/checkUserToken')
const router = express.Router()

router.post('/login', User.login);
// router.post('/register', Admin.register);
router.get('/userInfo',CheckUser.checkUser,User.userInfo);

// router.get('/info', Admin.getAdminInfo);
// router.post('/update/avatar/:admin_id', Admin.updateAvatar);
module.exports = router