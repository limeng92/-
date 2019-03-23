const db = require('../../../sqldb');
const sequelize = require('sequelize');
var Example = db.Example;
class ExampleService {
    constructor() {}
    async list (req, res, next) {
        try {
            let data = req.query
            let rows = await Example.findAll({
                offset: (Number(data.page)-1)*Number(data.limit),
                limit: Number(data.limit),
                order: sequelize.literal('id DESC')
            }).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            let total = await Example.count().then((result)=> {
                return result
            })
            return {
                data: rows,
                total: total
            }
        }catch (err) {
            throw err
        }
    }
    async create (req, res, next) {
        try {
            let data = req.body.data
        
            let result = db.sequelize.transaction(function(t){
                return Example.create(data,{
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