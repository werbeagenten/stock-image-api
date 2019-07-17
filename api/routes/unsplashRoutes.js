'use strict';


module.exports = function(app) {
  var unsplash = require('../controllers/unsplashController');

  // todoList Routes
  app.route('/unsplash')
    .get(unsplash.search_images)
    ;

};