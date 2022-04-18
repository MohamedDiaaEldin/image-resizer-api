"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_valid_image_inputs = void 0;
const is_valid_image_inputs = (req) => {
    return req.query.name && req.query.width && req.query.height ? true : false;
    // if (req.query.name &&  req.query.width &&  req.query.height){
    //   return true
    // }
    // return false
};
exports.is_valid_image_inputs = is_valid_image_inputs;
