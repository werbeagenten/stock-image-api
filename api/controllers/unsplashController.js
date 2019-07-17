'use strict';
require('es6-promise').polyfill();
require('isomorphic-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

var UnsplashImage = require('../models/unsplashImage'); //importing route

var config = require('../../config').unsplash;

const unsplash = new Unsplash({
    applicationId: config.applicationId,
    secret: config.secret
});

exports.search_images = function(req, res) {

    const { query : { search, page } } = req;
    
    const searchPage = page ? page : 1;

    unsplash.search.photos(search, searchPage, 30)
        .then(toJson)
        .then(json => {

            var images = json.results.map((data) => new UnsplashImage(data));

            res.json(images)
            // unsplash.photos.downloadPhoto(json["results"][0]);
        });
    // unsplash.photos.searchPhotos("bear", undefined, 1, 1)
    //     .then(toJson)
    //     .then(json => {
    //     console.log(json);
    //     });
    
};