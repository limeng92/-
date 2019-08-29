'use strict';
const express = require('express')
const auth = require('../app/admin/controller/authController')
const CheckUser = require('../middlewares/checkUserToken')
const router = express.Router()

// router.post('/register', Admin.register);
router.post('/list',CheckUser.checkUser,auth.list);
router.post('/all_list',CheckUser.checkUser,auth.all_list);
router.post('/detail/:proxy',CheckUser.checkUser,auth.show);
router.post('/create',CheckUser.checkUser,auth.create);
router.put('/update',CheckUser.checkUser,auth.update);
router.delete('/delete',CheckUser.checkUser,auth.delete);

// router.get('/info', Admin.getAdminInfo);
// router.post('/update/avatar/:admin_id', Admin.updateAvatar);
module.exports = router