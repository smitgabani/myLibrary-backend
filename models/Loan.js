const { Sequelize, DataTypes, Model } = require('sequelize');
const { pdb } = require('../config/database');

class Loan extends Model {};

Loan.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    // },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    patron_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    loaned_on: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: {
                msg: "Please enter a loaned-on date"
            }
        }
    },
    return_by: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: {
                msg: "Please enter a return-by date"
            }
        }
    },
    returned_on: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: {
                msg: "Please enter a returned-on date"
            }
        }
    }
},
{
    pdb,
    modelName: 'Loan',
    classMethods: {
        associate: function(models) {
            Loan.belongsTo(models.Member, {foreignKey: 'member_id'});
            Loan.belongsTo(models.Book, {foreignKey: 'book_id'});
        }
    },
    timestamps: false
});

Loan.sync({alter: true});
console.log("Loan: " + (Loan === pdb.models.Loan));
module.exports = Loan;