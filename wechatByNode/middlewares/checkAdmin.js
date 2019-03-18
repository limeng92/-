'use strict';


class Check {
	constructor(){
		
	}
	async checkAdmin(req, res, next){
		console.log('check Admin>>>>>>')
		next()
	}
	
}

module.exports = new Check()