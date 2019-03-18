'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: 'root',
        database: 'test',
        host: "localhost",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
};

module.exports = all;