"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_valid_image_inputs = void 0;
var is_valid_image_inputs = function (req) {
    return req.query.name && req.query.width && req.query.height;
};
exports.is_valid_image_inputs = is_valid_image_inputs;
