const jwt = require('jsonwebtoken');
class checkUserToken {
    constructor() {}
    //验证token并得到其中的payload
    async checkUser(req, res, next) {
        //获取token
        let token = req.body.token || req.query.token || req.headers['x-token'];

        let secretOrPrivateKey="suiyi"; // 这是加密的key（密钥）

        if (!token) {
            res.send({
                status: -1,
                message: 'Permission Denied!',
            })
        }

        try {
            //验证token是否有效
            jwt.verify(token,secretOrPrivateKey, function (err, decode) {
                if (err) {  //  时间失效的时候/ 伪造的token          
                    res.send({
                        status: -1,
                        message: 'token失效或者token验证失败!',
                    }) 
                    return           
                } else {
                    next()
                }
            })
        } catch (err) {
            res.send({
                status: -1,
                message: 'token失效或者token验证失败!',
            }) 
            return
        }
    }
}
module.exports = new checkUserToken()