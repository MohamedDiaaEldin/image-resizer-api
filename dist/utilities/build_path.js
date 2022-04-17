"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_main_path = exports.get_cash_path = void 0;
var path = require('path');
var abslout_path = path.resolve();
// build and return cashed image path  
var get_cash_path = function (image_name, width, height) {
    image_name = "".concat(image_name, "_").concat(width, "_").concat(height, ".webp");
    return path.join(abslout_path, '/images/cashed/', image_name);
};
exports.get_cash_path = get_cash_path;
//// build and return main image path  
var get_main_path = function (image_name) {
    return path.join(abslout_path, '/images/main/', image_name + ".jpg");
};
exports.get_main_path = get_main_path;
console.log((0, exports.get_cash_path)("test", 10, 20));
console.log((0, exports.get_main_path)("test"));
