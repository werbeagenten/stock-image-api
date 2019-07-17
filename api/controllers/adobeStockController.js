'use strict';
const axios = require('axios');
var AdobeStockImage = require('../models/adobeStockImage'); //importing route

var config = require('../../config').adobeStock;


exports.search_images = function(req, res) {

    const { query : { search, number, page } } = req;

    const limit = number ? number : 30;
    const offset = page ? page * limit : 0;

    // Optionally the request above could also be done as
    axios.get('https://stock.adobe.io/Rest/Media/1/Search/Files', {
        params: {
            locate: 'de_DE',
            'search_parameters[words]': search,
            'search_parameters[limit]': 30,
            'search_parameters[offset]': offset
        },
        headers: {
            'x-api-key': config.apiKey,
            'x-product': 'myTestApp1.0'
        }
    })
    .then(function (response) {
        console.log(response.data);
        var images = response.data.files.map(image => new AdobeStockImage(image));
        res.json(images);

    })
    .catch(function (error) {
        console.log(error);
    });


};