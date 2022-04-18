"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var build_path_1 = require("../../utilities/build_path");
describe('test build path function', function () {
    var path = require('path');
    var abslout_path = path.resolve();
    var image_name = "image_name";
    var width = 10;
    var hegiht = 20;
    var expected_cashed_path = "".concat(abslout_path, "/images/cashed/").concat(image_name, "_").concat(width, "_").concat(hegiht, ".webp");
    var expected_main_path = "".concat(abslout_path, "/images/main/").concat(image_name, ".jpg");
    it('test build cash path', function () {
        expect((0, build_path_1.get_cash_path)(image_name, width, hegiht)).toEqual(expected_cashed_path);
    });
    it('test build cash path', function () {
        expect((0, build_path_1.get_main_path)(image_name)).toEqual(expected_main_path);
    });
});
