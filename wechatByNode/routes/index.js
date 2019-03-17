'use strict';
const admin = require('./admin')
const wechat = require('./wechat')
module.exports = app => {
    app.use('/admin', admin);
    app.use('/wechat',wechat)
}
