"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_main_path = exports.get_cash_path = void 0;
const path = require('path');
const abslout_path = path.resolve();
// build and return cashed image path
const get_cash_path = (image_name, width, height) => {
    image_name = `${image_name}_${width}_${height}.webp`;
    return path.join(abslout_path, '/images/cashed/', image_name);
};
exports.get_cash_path = get_cash_path;
//// build and return main image path
const get_main_path = (image_name) => {
    return path.join(abslout_path, '/images/main/', image_name + '.jpg');
};
exports.get_main_path = get_main_path;
