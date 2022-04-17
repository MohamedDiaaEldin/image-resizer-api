"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_image_cashed = exports.is_image_there = void 0;
var path = require('path');
var fs_1 = require("fs");
var abslout_path = path.resolve();
// checks if the a file found for not 
// return image path if fount 
// return undefined if not
var get_cash_path = function (image_name) {
    return path.join(abslout_path, '/images/cashed/', image_name);
};
var get_main_path = function (image_name) {
    return path.join(abslout_path, '/images/main/', image_name);
};
var is_there = function (image_abslout_path) {
    return new Promise(function (resolve, reject) {
        (0, fs_1.stat)(image_abslout_path, function (error, stats) {
            if (error) {
                reject(undefined);
            }
            resolve(image_abslout_path);
        });
    });
};
var is_image_there = function (image_name) {
    var image_path = get_main_path(image_name);
    return is_there(image_path);
};
exports.is_image_there = is_image_there;
var is_image_cashed = function (image_name) {
    var image_path = get_cash_path(image_name);
    return is_there(image_path);
};
exports.is_image_cashed = is_image_cashed;
(0, exports.is_image_cashed)('encenadaport.jpg').then(function (result) {
    console.log(result);
}).catch(function (error) { return console.log(error); });
(0, exports.is_image_there)('encenadaport.jpg').then(function (result) {
    console.log(result);
}).catch(function (error) { return console.log(error); });
