// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = (app) => {
  app.get('/', (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/test');
    }
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/login', function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/homepage');
    }
    res.sendFile(path.join(__dirname, '../public/templates/test-login.html'));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route
  // they will be redirected to the signup page
  app.get('/homepage', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, '../public/templates/test.html'));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they
  // will be redirected to the signup page
  app.get('/test', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, '../templates/test.html'));
  });
};
