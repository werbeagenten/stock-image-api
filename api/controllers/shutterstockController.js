'use strict';

const sstk = require("shutterstock-api");
var ShutterstockImage = require('../models/shutterstockImage'); //importing route

var config = require('../../config').shutterstock;

sstk.setBasicAuth(config.clientId, config.clientSecret);


const imagesApi = new sstk.ImagesApi();
const queryParams = {
    "query": "kites",
    "image_type": "photo",
    "page": 1,
    "per_page": 30,
    "sort": "popular",
    "view": "minimal"
};

exports.search_images = function(req, res) {

    const { query : { search, page } } = req;

    if( page ) queryParams.page = page;

    queryParams.query = search

    imagesApi.searchImages(queryParams)
    .then(({data}) => {
        var images = data.map(image => new ShutterstockImage(image));
        res.json(images)
    })

    .catch((error) => {
        console.error(error);
    });

    
};