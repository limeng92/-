const db=require('../../../sqldb');
const sequelize = require('sequelize');
const auth=db.auth;
class authService{
    async list(req, res, next){ //查询权限表所有数据
        try {
            let data = req.query
            let rows = await auth.findAll({
                offset: (Number(data.page)-1)*Number(data.limit),
                limit: Number(data.limit),
                order: sequelize.literal('id DESC')
            }).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            let total = await auth.count().then((result)=> {
                return result
            })
            this.dg(rows);
            return {
                data: rows,
                total: total
            }
        }catch (err) {
            throw err
        }
    }
    //重组对象
    async dg(req, res, next){
        req.forEach((item,index,arr)=>{
            req.forEach((item1,index1,arr1)=>{
                if(item.auth_pid==0){
                    item.dataValues.auth_pid_name='顶级权限';
                }else{
                    if(item.auth_pid===item1.id){
                        item.dataValues.auth_pid_name=item1.auth_name;
                    }
                } 
            })
        })
    }
    async all_list(req, res, next){
        try {
            let rows = await auth.findAll({order: sequelize.literal('id DESC')
            }).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            return {
                data: rows
            }
        }catch (err) {
            throw err
        }
    }
    async show (req, res, next) {
        try {
            let data = req.query
            let result = await auth.findOne({
                where: {id: data.id}
            }).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            return result
        } catch (err) {
            throw err
        }
    }
    async create (req, res, next) {
        try {
            let data = req.body
            //查询选择订单权限等级
            let Oneresult = await auth.findOne({
                where: {id: data.auth_pid}
            }).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            if(Oneresult==null){
                data.dataValues.auth_level=1;    
            }else{
                data.auth_level=Oneresult.auth_level+1;
            }
            let result = db.sequelize.transaction(function(t){
                return auth.create(data,{
                    transaction:t
                }).then(function(result){
                    return result
                }).catch(function(err){
                    throw err
                });
            })
            return result
        }catch (err) {
            throw err
        }
    }
    async update (req, res, next) {
        try {
            let data = JSON.parse(req.query.data)
            let where = {where: {id: data.id}}
            let result = await auth.update(data,where).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            return result
        }catch (err) {
            throw err
        }
    }
}

module.exports = new authService();