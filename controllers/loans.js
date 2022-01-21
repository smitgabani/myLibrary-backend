const pdb = require('../config/database');
const Book = require('../models/Loan');

module.exports = {
    async getAllLoans(req, res, next) {},
    async getOverDueLoans(req, res, next) {},
    async getCheckedOutLoans(req, res, next) {},
    async postNewLoan(req, res, next) {}
}