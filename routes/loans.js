var express = require('express');
var router = express.Router();

// @desc    display all books in pdb
// @route   /loans/
router.get('/', (req, res, next) => {
    res.send("get all loans");
});

module.exports = router;