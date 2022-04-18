"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_images_1 = require("../../utilities/search_images");
describe('test search image function ', function () {
    var image_name = "fjord";
    it('test with valid image name', function (done) {
        (0, search_images_1.is_image_there)(image_name).then(function (result) {
            expect(result).toBeTruthy();
        }).catch(function (result) {
            expect(result).toBeFalse();
        });
        done();
    });
    it('test with not valid valid image name', function (done) {
        (0, search_images_1.is_image_there)(image_name).then(function (result) {
            // 
        }).catch(function (result) {
            expect(result).toBeFalse();
        });
        done();
    });
});
