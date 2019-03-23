const db = require('../../../sqldb');
var Example = db.Example;
class ExampleService {
    constructor() {}
    async list (req, res, next) {
        try {
            let data = req.body.data
            await Example.findAll({
                where: {
                  offset: data.page,
                  limit: data.limit,
                  order: 'id DESC'
                }
            }).then((result)=> {
                return result
            }).catch((err)=> {
                return err
            });
        }catch (err) {
            throw err
        }
    }
    async create (req, res, next) {
        try {
            let data = req.body.data
        
            return db.sequelize.transaction(function(t){
                console.log("+++++++++++++++++++");
                return Example.create(data,{
                    transaction:t
                }).then(function(result){
                    return result
                }).catch(function(err){
                    throw err
                });
            })
        }catch (err) {
            throw err
        }
    }
    async show (req, res, next) {
        try {
            let data = req.body.data
            await Example.findOne({
                where: data.where
            }).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
        } catch (err) {
            throw err
        }
    }
    async update (req, res, next) {
        try {
            let data = req.body.data
            await Example.update(data.updateParams, data.where).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
        }catch (err) {
            throw err
        }
    }
    async delete (req, res, next) {
        try {
            let data = req.body.data
            await destroy({where: data.where}).then((result)=> {
                return result
            }).catch((err)=>{
                throw err
            })
        }catch (err) {
            throw err
        }
    }    
}
module.exports = new ExampleService()