"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_images_1 = require("./utilities/sharp_images");
var search_images_1 = require("./utilities/search_images");
var build_path_1 = require("./utilities/build_path");
var app = (0, express_1.default)();
var port = 5000;
var server_error = {
    status_code: 500,
    message: "server error"
};
app.get('/image', function (req, res) {
    var image_name = req.query.name;
    var image_width = Number(req.query.width);
    var image_height = Number(req.query.height);
    (0, search_images_1.is_image_there)(image_name).then(function (image_path) {
        (0, search_images_1.is_image_cashed)(image_name, image_width, image_height).then(function (result) {
            /// reutrn cashed image
            console.log("there is a cashed image");
            console.log(image_path);
            res.sendFile((0, build_path_1.get_cash_path)(image_name, image_width, image_height));
        }).catch(function (r) {
            console.log('no cashed image');
            // resize and save to cash                 
            (0, sharp_images_1.resize_image)(image_name, image_width, image_height).then(function (result) {
                res.sendFile((0, build_path_1.get_cash_path)(image_name, image_width, image_height));
            }).catch(function (err) {
                console.log('not done');
                res.send('not done');
            });
        });
    }).catch(function (error) {
        res.json({
            status_code: 404,
            message: "image not found"
        });
    });
    // res.send('hello')
});
app.get("/test", function (req, res) {
    res.sendFile("/home/mdiaa/Desktop/udacity/advanced-web-udacity/first/project/images/main/santamonica.jpg");
});
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});
exports.default = app;
