var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")

// ROUTES
const TournoiRouter = require('./routes/tournoi');
const EquipeRouter = require('./routes/equipe');
const JoueurRouter = require('./routes/Joueur');
const MatchRouter = require('./routes/Match_old')



var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES API
app.use('/api.tournoi', TournoiRouter);
app.use('/api.equipe', EquipeRouter); 
app.use('/api.joueur', JoueurRouter);
app.use('/api.rencontre', MatchRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
    const response = {
        Status : 'KO',
        Error : err.message
    }

    res.json(JSON.stringify(response));
})
//   res.status(err.status || 500);
//   res.render('error');
// });



module.exports = app;
