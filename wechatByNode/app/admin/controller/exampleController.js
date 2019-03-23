const exampleService = require('../service/exampleService')
class ExampleController {
    constructor () {}
    async list (req, res, next) {
        try {
            let result = await exampleService.list(req, res, next)
            console.log(result)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.send({
                status: -1,
                type: '',
                message: '查询失败',
            })
        }
    }
    async create (req, res, next) {
        try {
            let result = await exampleService.create(req, res, next)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.send({
                status: -1,
                type: '',
                message: '查询失败',
            })
        }
    }
    async show (req, res, next) {
        try {
            let result = await exampleService.show(req, res, next)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.send({
                status: -1,
                type: '',
                message: '查询失败',
            })
        }
    }
    async update (req, res, next) {
        try {
            let result = await exampleService.update(req, res, next)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.send({
                status: -1,
                type: '',
                message: '更新失败',
            })
        }
    }
    async delete (req, res, next) {
        try {
            let result = await exampleService.delete(req, res, next)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.send({
                status: -1,
                type: '',
                message: '删除失败',
            })
        }
    }

}
module.exports = new ExampleController()