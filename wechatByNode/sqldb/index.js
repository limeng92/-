'use strict'

var config = require('../config/mysql');
var Sequelize = require('sequelize');
var db = {
    sequelize:new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password,config.sequelize)
};
db.Test = db.sequelize.import('../models/test.js');
module.exports = db;