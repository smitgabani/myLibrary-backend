// > npm dependency packages
const express = require('express');

// > custom module import
const { pdb, mdb } = require('./config/database');
var homeRoutes = require('./routes/index');
var booksRoute = require('./routes/books');
var loansRoute = require('./routes/loans');
var memberRoute = require('./routes/members');

// creating an express instance
const app = express();

// > middlewares


// > routes
app.use('/', homeRoutes);
app.use('/books', booksRoute);
app.use('/loans', loansRoute);
app.use('/members', memberRoute);




// > import routes


// > 404 || NOT FOUND
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// > Error Handler middleware
app.use(function(err, req, res, next) {

});

// > server callback
onServerStart = () => { // or name it as initialize()
    console.log('Express server running at http://' + HOST + ':' + PORT + '/');
    // > connection to db (pg and mongo)
    pdb.authenticate()
    .then(() => console.log("Connection successful..."))
    .catch((err) => console.log("Error: " + err));

}
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, onServerStart);