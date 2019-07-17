'use strict';


module.exports = function(app) {
  var adobeStock = require('../controllers/adobeStockController');

  // todoList Routes
  app.route('/adobeStock')
    .get(adobeStock.search_images)
    ;

};