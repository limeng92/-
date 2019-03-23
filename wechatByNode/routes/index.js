'use strict';
const user = require('./user')
const wechat = require('./wechat')
const example = require('./example')
module.exports = app => {
    app.use('/user', user);
    app.use('/example', example);
    app.use('/wechat',wechat)
}
