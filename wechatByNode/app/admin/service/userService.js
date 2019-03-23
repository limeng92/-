const db = require('../../../sqldb');
const jwt = require('jsonwebtoken');
var Test = db.Test;
class UserService {
    constructor() {}
    async getUserInfo(req, res, next) {
        try {
            return {
                roles: ['admin'],
                token: 'admin',
                introduction: '我是超级管理员',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                name: 'Super Admin'
            }
        } catch (err) {
            throw err
        }
    }
    // async getUserInfo(req) {
    //     try{
    //         console.log("+++++++++++++++++++++++");
    //         var saveUser = {
    //             name:'aa',
    //             age:10,
    //             height:10,
    //             weight:10
    //         };
        
    //         return db.sequelize.transaction(function(t){
    //             console.log("+++++++++++++++++++");
    //             return Test.create(saveUser,{
    //                 transaction:t
    //             }).then(function(result){
    //                 console.log('iekek')
    //                 return result
    //             }).catch(function(err){
    //                 console.log("发生错误：" + err);
    //             });
    //         })
    //     }catch (err) {
    //         throw err
    //     }
    // }
    async login (req, res, next) {
        try{
            var saveUser = {
                username:req.body.username,
                password:req.body.password,
                age:10,
                height:10,
                weight:10
            };
            var user=await Test.findOne({
                    where: {
                        username: saveUser.username
                    }
                })
            if(!user){

                db.sequelize.transaction(function(t){
                    
                    return Test.create(saveUser,{
                        transaction:t
                    }).then(function(result){
                       
                       return result;
                    }).catch(function(err){
                        console.log("发生错误：" + err);
                    });
                })
                return {
                    status: 1,
                    token:this.createToken(saveUser),
                    message: '注册成功!',
                }
            }else if(saveUser.password==user.password){
                return {
                    status: 1,
                    token:this.createToken(saveUser),
                    message: '登录成功！',
                }    
            }else{
                return {
                    status: 0,
                    message: '用户名或密码错误',
                }
            }
           
        }catch (err) {
            throw err
        }
    }
    //创建token
    createToken(saveUser) {
        var payload = {};
        payload[saveUser.name] = saveUser;// 要生成token的主题信息
        let secretOrPrivateKey="suiyi" // 这是加密的key（密钥）     
        return jwt.sign(payload,secretOrPrivateKey, {
            expiresIn: 60*60*1,
            noTimestamp: true
        });
        
    }
}
module.exports = new UserService()