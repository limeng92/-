'use strict';
const express = require('express')
const Admin = require('../app/admin/controller/userController')
const checkAdmin = require('../middlewares/checkAdmin')
const router = express.Router()

router.post('/login',checkAdmin.checkAdmin, Admin.login);
// router.post('/register', Admin.register);
router.get('/singout', Admin.singout);

// router.get('/info', Admin.getAdminInfo);
// router.post('/update/avatar/:admin_id', Admin.updateAvatar);
module.exports = router