const ImageKit = require('imagekit');

const {
    IMAGEKIT_PUBLIC_KEY,
    IMAGE_SECRET_KEY,
    IMAGEKIT_URL_ENDPOINT
} = process.env;

module.exports ={
    imageKit: new ImageKit({
        publicKey: IMAGEKIT_PUBLIC_KEY,
        privateKey: IMAGE_SECRET_KEY,
        urlEndpoint: IMAGEKIT_URL_ENDPOINT
    })
   
}
