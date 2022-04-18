"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize_image = void 0;
const build_path_1 = require("./build_path");
const sharp = require('sharp');
const resize_image = (image_name, width, height) => {
    const image_path = (0, build_path_1.get_main_path)(image_name);
    const image_cashed_path = (0, build_path_1.get_cash_path)(image_name, width, height);
    return new Promise((resolve, reject) => {
        sharp(image_path)
            .resize(width, height)
            .toFile(image_cashed_path, (error, info) => {
            if (error) {
                console.log(error);
                console.log('error while resizing');
                reject(false);
            }
            resolve(true);
        });
    });
};
exports.resize_image = resize_image;
