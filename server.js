// *****************************************************************************
// This file is the initial starting point for the Node/Express server.
//
require('dotenv').config();
const passport = require('./config/passport');

// *****************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const session = require('express-session');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// We need to use sessions to keep track of our user's login status
app.use(session({secret: 'keyboard dog', resave: true,
  saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
// Routes
// =============================================================
require('./routes/html-routes.js')(app);
require('./routes/user-api-routes.js')(app);
require('./routes/dog-api-routes.js')(app);
require('./routes/action-api-routes.js')(app);
require('./routes/userdogs-api-routes.js')(app);
require('./routes/invite-api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
