"use strict";
var sharp = require('sharp');
sharp('./images/encenadaport.jpg')
    .rotate()
    .resize(50, 50).toFile('output.webp', function (error, info) {
    console.log(typeof (error));
    console.log(typeof (info));
    if (error) {
        console.log(error);
    }
    else {
        console.log(info);
    }
});
