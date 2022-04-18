"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_image_cashed = exports.is_image_there = void 0;
const fs_1 = require("fs");
const build_path_1 = require("./build_path");
const build_path_2 = require("./build_path");
// checks if the a file found for not
// return image path if fount
// return undefined if not
const is_there = (image_abslout_path) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.stat)(image_abslout_path, (error, stats) => {
            if (error) {
                reject(undefined);
            }
            resolve(image_abslout_path);
        });
    });
};
const is_image_there = (image_name) => {
    const image_path = (0, build_path_2.get_main_path)(image_name);
    return is_there(image_path);
};
exports.is_image_there = is_image_there;
const is_image_cashed = (image_name, width, height) => {
    const image_path = (0, build_path_1.get_cash_path)(image_name, width, height);
    return is_there(image_path);
};
exports.is_image_cashed = is_image_cashed;
