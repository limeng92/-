const db = require('../../../sqldb');
var Test = db.Test;
class UserService {
    constructor() {}
    async getUserInfo(req) {
        try{
            console.log("+++++++++++++++++++++++");
            var saveUser = {
                name:'aa',
                age:10,
                height:10,
                weight:10
            };
        
            return db.sequelize.transaction(function(t){
                console.log("+++++++++++++++++++");
                return Test.create(saveUser,{
                    transaction:t
                }).then(function(result){
                    console.log('iekek')
                    return result
                }).catch(function(err){
                    console.log("发生错误：" + err);
                });
            })
        }catch (err) {
            throw err
        }
    }
    login () {
        try {
            return db.sequelize.transaction(function(t){
                return Test.findOne({userName: 'test',passWord: 'test'},{
                    transaction:t
                }).then(function(result){
                   if (result) {
                        let token = jwt.sign(user,app.get('superSecret'),{
                            expiresIn: 60*60*24
                        })
                        return {
                            success: true,
                            message: '请使用你的授权码',
                            token: token
                        }
                   }
                }).catch(function(err){
                    console.log("发生错误：" + err);
                });
            })
        } catch (err) {

        }
    }
}
module.exports = new UserService()