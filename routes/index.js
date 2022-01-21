var express = require('express');
var router = express.Router();

// @desc    home page
// @route   GET /
router.get('/', (req, res, next) => {
    res.send('home page');
});

module.exports = router;