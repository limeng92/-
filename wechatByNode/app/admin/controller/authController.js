const authService =require('../service/authService')

class authController {
    constructor () {}
    async list(req, res, next){
        try{
           let result=await authService.list(req, res, next);
           res.send(result);     
        }catch(err){
            res.status(500).send({
                status: -1,
                type: '',
                message: '查询失败',
            })
        }
    }
    async all_list(req, res, next){
        try{
            let result=await authService.all_list(req, res, next);
            res.send(result);     
         }catch(err){
             res.status(500).send({
                 status: -1,
                 type: '',
                 message: '查询失败',
             })
         }
    }
    async show(req, res, next){
        try{
            let result=await authService.show(req, res, next);
            res.send(result);     
         }catch(err){
             res.status(500).send({
                 status: -1,
                 type: '',
                 message: '查询失败',
             })
         }
    }
    async create (req, res, next) {
        try {
            let result = await authService.create(req, res, next)
            res.send(result)  
        }catch (err) {
            console.log(err)
            res.status(500).send({
                status: -1,
                type: '',
                message: '查询失败',
            })
        }
    }
    async update(req, res, next){
        try{
           let result=await authService.update(req, res, next);
           res.send(result);     
        }catch(err){
            res.status(500).send({
                status: -1,
                type: '',
                message: '更新失败',
            })
        }
    }
}
module.exports = new authController()