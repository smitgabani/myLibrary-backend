const { Sequelize } = require("sequelize");
const { mongoose } = require('mongoose');

// > postgres db
var pdb = new Sequelize("library_invent", "postgres", "admin", {
    host: "localhost",
    dialect: "postgres",
});

var mdb = null;

module.exports = {
    pdb,
    mdb
}