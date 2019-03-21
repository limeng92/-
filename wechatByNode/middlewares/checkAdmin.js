'use strict';


class Check {
	constructor(){
		
	}
	async checkAdmin(req, res, next){
		console.log('check Admin>>>>>>')
		next()
	}
	async checkToken (req,res,next) {
		try {
			// 拿取token 数据 按照自己传递方式写
			var token = req.body.token || req.query.token || req.headers['x-access-token'];
			if (token) {      
				// 解码 token (验证 secret 和检查有效期（exp）)
				jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
					if (err) {
						return res.json({ success: false, message: '无效的token.' })
					} else {
						// 如果验证通过，在req中写入解密结果
						req.decoded = decoded;  
						//console.log(decoded)
						next(); //继续下一步路由
					}
				});
			} else {
				// 没有拿到token 返回错误 
				return res.status(403).send({ 
						success: false, 
						message: '没有找到token.' 
				})
			}
		} catch (err) {
			throw err
		}
	}
	
}

module.exports = new Check()