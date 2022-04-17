"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize_image = void 0;
var build_path_1 = require("./build_path");
var sharp = require('sharp');
var resize_image = function (image_name, width, height) {
    var image_path = (0, build_path_1.get_main_path)(image_name);
    var image_cashed_path = (0, build_path_1.get_cash_path)(image_name, width, height);
    return new Promise(function (resolve, reject) {
        try {
            sharp(image_path)
                .resize(width, height).toFile(image_cashed_path, function (error, info) {
                if (error) {
                    console.log("error resizing");
                    reject(false);
                }
                else {
                    resolve(true);
                }
            });
        }
        catch (_a) {
            console.log("error while rezing");
            resolve(false);
        }
    });
};
exports.resize_image = resize_image;
// const imge_name  = 'palmtunnel'
// resize_image(imge_name, 100, 100).then( result =>{
//     console.log('done')
// }).catch(err=>{
//     console.log('not done')
// })
