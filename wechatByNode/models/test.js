'use strict'
module.exports = function(sequelize,DataTypes){
    var Test = sequelize.define('test',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        username:{
            type:DataTypes.STRING
        },
        password: {
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.INTEGER
        },
        height:{
            type:DataTypes.INTEGER
        },
        weight:{
            type:DataTypes.INTEGER
        }
    },{
        freezeTableName: true
    });
    return Test
};