'use strict';

var Image = require('./image'); //importing route

module.exports = class ShutterstockImage extends Image {

    

    constructor(data){
        super(data);
        this.provider = 'Shutterstock';
        this.id = data.id
        this.previewUrl = data.assets.preview_1000.url
        this.readMoreUrl = 'https://www.shutterstock.com/de/search/' + data.id
        this.description = data.description
    }
}