'use strict';
const express = require('express')
const Example = require('../app/admin/controller/exampleController')
const CheckUser = require('../middlewares/checkUserToken')
const router = express.Router()

// router.post('/register', Admin.register);
router.get('/list',CheckUser.checkUser,Example.list);
router.get('/detail/:proxy',CheckUser.checkUser,Example.show);
router.post('/create',CheckUser.checkUser,Example.create);
router.put('/update',CheckUser.checkUser,Example.list);
router.delete('/delete',CheckUser.checkUser,Example.delete);

// router.get('/info', Admin.getAdminInfo);
// router.post('/update/avatar/:admin_id', Admin.updateAvatar);
module.exports = router