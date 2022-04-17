"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var search_images_1 = require("./utilities/search_images");
var app = (0, express_1.default)();
var port = 5000;
// console.log(typeof(sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg')))
// sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg').then(result=>{
//     console.log(result)
// }).catch( error=> console.log(error))
app.get('/image', function (req, res) {
    // check if valid request 
    // check if image is found
    // if cashed with the same size 
    //return it from cash folder 
    // else 
    //resize it and save to the cashed folder 
    // return resized images  
    (0, search_images_1.is_image_there)(req.query.name + ".jpg").then(function (result) {
        var cashed_path = req.query.name + ".jpg";
        res.send("found");
    }).catch(function (error) {
        res.json({
            status_code: 404,
            message: "image not found"
        });
    });
    // res.send('hello')
});
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});
exports.default = app;
