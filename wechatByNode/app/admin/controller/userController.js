const userService = require('../service/userService')
class UserController {
    constructor () {}
    async login (req, res, next) {
        try {
            let re = await userService.getUserInfo(req)
            console.log(re)
            res.send({
                status: 1,
                success: '登录成功'
            })
        }catch (err) {
            console.log(err)
            res.send({
                status: 0,
                type: 'LOGIN_ADMIN_FAILED',
                message: '登录管理员失败',
            })
        }
    }
    async singout () {

    }

}
module.exports = new UserController()