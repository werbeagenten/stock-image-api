'use strict';

imagesApi.searchImages(queryParams)
.then(({data}) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
});