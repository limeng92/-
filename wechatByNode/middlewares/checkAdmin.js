'use strict';


class Check {
	constructor(){
		
	}
	async checkAdmin(req, res, next){
		next()
	}
	async verifyToken (req,res,next) {
		
	}
	
}

module.exports = new Check()