"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_images_1 = require("./utilities/sharp_images");
var search_images_1 = require("./utilities/search_images");
var build_path_1 = require("./utilities/build_path");
var validation_1 = require("./utilities/validation");
var app = (0, express_1.default)();
var port = 5000;
app.get('/image', function (req, res) {
    // validate end point params 
    if (!(0, validation_1.is_valid_image_inputs)(req)) {
        return res.json({
            "status_code": 400,
            "message": "bad request"
        });
    }
    var image_name = req.query.name;
    var image_width = Number(req.query.width);
    var image_height = Number(req.query.height);
    (0, search_images_1.is_image_there)(image_name).then(function (main_image_path) {
        (0, search_images_1.is_image_cashed)(image_name, image_width, image_height).then(function (cashed_image_path) {
            /// reutrn cashed image
            console.log("there is a cashed image");
            res.sendFile(cashed_image_path);
        }).catch(function (r) {
            console.log('not cashed image');
            // resize and save to cash                 
            (0, sharp_images_1.resize_image)(image_name, image_width, image_height).then(function (is_done) {
                /// return new cashed image             
                res.sendFile((0, build_path_1.get_cash_path)(image_name, image_width, image_height));
            }).catch(function (err) {
                res.json({
                    status_code: 500,
                    message: "server error"
                });
            });
        });
    }).catch(function (error) {
        res.json({
            status_code: 404,
            message: "image not found"
        });
    });
});
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});
exports.default = app;
