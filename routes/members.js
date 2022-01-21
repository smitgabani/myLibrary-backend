var express = require('express');
var router = express.Router();

const name = (req, res, next) => {

}

// @desc    display all books in pdb
// @route   /users/
router.get('/', (req, res, next) => {
    res.send("get all users");
});

module.exports = router;