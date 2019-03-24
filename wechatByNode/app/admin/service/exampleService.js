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
            let data = req.body
            console.log('>>>>data',data)
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
            let data = req.query
            let result = await Example.findOne({
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
    async update (req, res, next) {
        try {
            let data = JSON.parse(req.query.data)
            let where = {where: {id: data.id}}
            let result = await Example.update(data,where).then((result)=> {
                return result
            }).catch((err)=> {
                throw err
            });
            return result
        }catch (err) {
            throw err
        }
    }
    async delete (req, res, next) {
        try {
            let data = req.query
            let where = {id: data.id}
            let result = await Example.destroy({where: where}).then((result)=> {
                return result
            }).catch((err)=>{
                throw err
            })
            return result
        }catch (err) {
            throw err
        }
    }    
}
module.exports = new ExampleService()