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
}
module.exports = new UserService()