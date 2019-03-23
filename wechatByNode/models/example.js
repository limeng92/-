'use strict'
module.exports = function(sequelize,DataTypes){
    var Example = sequelize.define('example',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue:DataTypes.UUIDV1
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        company: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        height:{
            type:DataTypes.INTEGER
        },
        weight:{
            type:DataTypes.INTEGER
        }
    },{
        freezeTableName: true,
        timestamps: false
    });
    return Example
};