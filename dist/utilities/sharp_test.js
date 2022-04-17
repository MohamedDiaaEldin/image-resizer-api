"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharp_image = void 0;
var sharp = require('sharp');
var sharp_image = function (image_path, width, height, dis_path) {
    var pro = new Promise(function (resolve, reject) {
        sharp(image_path)
            .rotate()
            .resize(width, height).toFile(dis_path, function (error, info) {
            if (error) {
                reject(false);
            }
            else {
                resolve(true);
            }
        });
    });
    return pro;
};
exports.sharp_image = sharp_image;
