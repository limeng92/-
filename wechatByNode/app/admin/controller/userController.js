const userService = require('../service/userService')
class UserController {
    constructor () {}
    async login (req, res, next) {
        try {
            let result = await userService.login(req, res, next)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.send({
                status: 0,
                type: 'LOGIN_ADMIN_FAILED',
                message: '登录管理员失败',
            })
        }
    }
    async userInfo (req, res, next) {
        try {
            let result = await userService.getUserInfo(req, res, next)
            res.send(result)
        } catch (err) {
            res.send({
                status: 0,
                type: 'USER_INFO_FAILED',
                message: err,
            })
        }
    }

}
module.exports = new UserController()