'use strict'
module.exports = function(sequelize,DataTypes){
    var Example = sequelize.define('auth',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        auth_name: {
            type:DataTypes.STRING,
            allowNull:false
        },
        auth_pid:{
            type:DataTypes.STRING,
            allowNull:false
        },
        auth_c:{
            type:DataTypes.STRING,
            allowNull:false
        },
        auth_a:{
            type:DataTypes.STRING,
            allowNull:false
        },
        auth_level:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        freezeTableName: true,
        timestamps: false
    });
    return Example
};