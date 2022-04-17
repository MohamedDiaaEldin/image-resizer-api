"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 5000;
// console.log(typeof(sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg')))
// sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg').then(result=>{
//     console.log(result)
// }).catch( error=> console.log(error))
app.get('/image', function (req, res) {
    console.log(req.query.name);
    console.log(req.query.width);
    console.log(req.query.height);
    res.send('hello');
});
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});
exports.default = app;
