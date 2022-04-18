"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_images_1 = require("../../utilities/search_images");
describe('test search image function ', () => {
    const image_name = 'fjord';
    it('test with valid image name', (done) => {
        (0, search_images_1.is_image_there)(image_name).then(result => {
            expect(result).toBeTruthy();
        }).catch(result => {
            expect(result).toBeFalse();
        });
        done();
    });
    it('test with not valid valid image name', (done) => {
        (0, search_images_1.is_image_there)(image_name).then(result => {
            //
        }).catch(result => {
            expect(result).toBeFalse();
        });
        done();
    });
});
