'use strict';

var Image = require('./image'); //importing route

module.exports = class UnsplashImage extends Image {

    constructor(data){
        super(data);
        this.provider = 'Unsplash';
        this.id = data.id
        this.previewUrl = data.urls.regular
        this.readMoreUrl = data.links.html
        this.description = data.description
    }

}