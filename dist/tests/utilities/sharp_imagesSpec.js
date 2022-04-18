"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_images_1 = require("../../utilities/sharp_images");
describe('test image  resizing ', () => {
    it('test image resizing', () => {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, sharp_images_1.resize_image)('encenadaport', 150, 300);
        })).not.toThrow();
    });
});
