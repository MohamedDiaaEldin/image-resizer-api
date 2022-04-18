"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_images_1 = require("./utilities/sharp_images");
const search_images_1 = require("./utilities/search_images");
const build_path_1 = require("./utilities/build_path");
const validation_1 = require("./utilities/validation");
const app = (0, express_1.default)();
const port = 5000;
app.get('/image', (req, res) => {
    // validate end point params
    if (!(0, validation_1.is_valid_image_inputs)(req)) {
        return res.json({
            'status_code': 400,
            'message': 'bad request'
        });
    }
    const image_name = req.query.name;
    const image_width = Number(req.query.width);
    const image_height = Number(req.query.height);
    (0, search_images_1.is_image_there)(image_name).then(main_image_path => {
        (0, search_images_1.is_image_cashed)(image_name, image_width, image_height).then(cashed_image_path => {
            /// reutrn cashed image
            console.log('there is a cashed image');
            res.sendFile(cashed_image_path);
        }).catch(r => {
            console.log('not cashed image');
            // resize and save to cash
            (0, sharp_images_1.resize_image)(image_name, image_width, image_height).then(is_done => {
                /// return new cashed image
                res.sendFile((0, build_path_1.get_cash_path)(image_name, image_width, image_height));
            }).catch(err => {
                res.json({
                    status_code: 500,
                    message: 'server error'
                });
            });
        });
    }).catch(error => {
        res.json({
            status_code: 404,
            message: 'image not found'
        });
    });
});
app.listen(port, () => {
    console.log(`Listing on port ${port}`);
});
exports.default = app;
