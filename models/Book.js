const { Sequelize, DataTypes, Model } = require('sequelize');
const { pdb } = require('../config/database');

class Book extends Model {};

Book.init({
    // book id will be there and will be auto generated.
    title: {
        type: DataTypes.STRING,
        validate: {
                notEmpty: {
                    msg: "Please enter a title"
                }
        }
    },
    author: {
        type: DataTypes.STRING,
        validate: {
                notEmpty: {
                    msg: "Please enter the author"
                }
        }
    },
    genre: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Please entert the genre"
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Please enter some description"
            }
        }
    },
    publicationyear : {
        type: DataTypes.STRING,
        // validate: {
        //     notEmpty: {
        //         msg: "Please enter the publication year"
        //     }
        // }
    },
    copies_owned: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},
{
    pdb,
    modelName: 'Book',
    classMethods: {
        associate: function(models) {
            Book.hasMany(models.Loan, {foreignKey: 'book_id'});
        }
    },
    timestamps: false
});

Book.sync({alter: true});
console.log("Book: " + Book === pdb.models.Book);

module.exports = Book;