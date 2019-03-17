const config = require('../config/weChatConfig') //引入配置文件
const express = require('express')
const wechat = require('../app/wechat/wechat')
const router = express.Router()
var wechatApp = new wechat(config); //实例wechat 模块


//用于处理所有进入 3000 端口 get 的连接请求
router.get('/',function(req,res){
    wechatApp.auth(req,res);
});

//用于处理所有进入 3000 端口 post 的连接请求
router.post('/',function(req,res){
    wechatApp.handleMsg(req,res);
});

//用于请求获取 access_token
router.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});

module.exports = router