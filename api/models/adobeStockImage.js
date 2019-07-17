'use strict';

var Image = require('./image'); //importing route

module.exports = class AdobeStockImage extends Image {

    

    constructor(data){
        super(data);
        this.provider = 'Adobe Stock';
        this.id = data.id
        this.previewUrl = data.thumbnail_url
        this.readMoreUrl = 'https://stock.adobe.com/' + data.id
        this.description = data.title
    }
}