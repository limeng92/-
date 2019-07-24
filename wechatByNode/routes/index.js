'use strict';
const user = require('./user')
const wechat = require('./wechat')
const example = require('./example')
const auth = require('./auth')
module.exports = app => {
    app.use('/user', user);
    app.use('/example', example);
    app.use('/auth', auth);
    app.use('/wechat',wechat)
}
