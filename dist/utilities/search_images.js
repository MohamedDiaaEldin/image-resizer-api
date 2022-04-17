"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_image_cashed = exports.is_image_there = void 0;
var fs_1 = require("fs");
var build_path_1 = require("./build_path");
var build_path_2 = require("./build_path");
// checks if the a file found for not 
// return image path if fount 
// return undefined if not
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
    var image_path = (0, build_path_2.get_main_path)(image_name);
    return is_there(image_path);
};
exports.is_image_there = is_image_there;
var is_image_cashed = function (image_name, width, height) {
    var image_path = (0, build_path_1.get_cash_path)(image_name, width, height);
    return is_there(image_path);
};
exports.is_image_cashed = is_image_cashed;
// is_image_cashed('encenadaport.jpg').then(result=>{
//     console.log(result)
// }).catch(error => console.log(error))
// is_image_there('encenadaport.jpg').then(result=>{
//     console.log(result)
// }).catch(error => console.log(error))
