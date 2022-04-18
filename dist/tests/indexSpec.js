"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var axios_1 = __importDefault(require("axios"));
// configure supertest with the app
var request = (0, supertest_1.default)(index_1.default);
describe("test index express endpoint", function () {
    it("test end point status code response", function (done) {
        // test status code
        request.get("/image").then(function (response) {
            expect(response.status).toBe(200);
        });
        done();
    });
    it("test not valid parms of image end point ", function (done) {
        // test status code
        axios_1.default.get('http://localhost:5000/image?name=car?w=10').then(function (response) {
            expect(response.data.status_code).toBe(400);
            expect(response.data.message).toEqual('bad request');
        });
        done();
    });
    it("test valid parms of image end point ", function (done) {
        // test status code
        axios_1.default.get('http://localhost:5000/image?name=car&width=10&height=20').then(function (response) {
            expect(response.data.status_code).not.toBe(400);
            expect(response.data.message).not.toEqual('bad request');
        });
        done();
    });
    // end of describe
});
