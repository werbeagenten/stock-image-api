'use strict';


module.exports = function(app) {
  var shutterstock = require('../controllers/shutterstockController');

  // todoList Routes
  app.route('/shutterstock')
    .get(shutterstock.search_images)
    // .post(todoList.create_a_task)
    ;

};