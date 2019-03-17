'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: 'abc@123',
        database: 'admin',
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