const { Sequelize, DataTypes, Model } = require('sequelize');
const { pdb } = require('../config/database');

class Member extends Model {};

Member.init({
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Please enter the member name"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Please enter a email"
            }
        }
    }
},
{
    pdb,
    modelName: 'Member',
    classMethods: {
        associate: function(models) {
            Member.hasMany(models.Loan, {foreignKey: 'member_id'});
        }
    },
    timestamps: false
});

Member.sync({alter: true});
console.log("Member: " + Member === pdb.models.Member);
module.exports = Member;