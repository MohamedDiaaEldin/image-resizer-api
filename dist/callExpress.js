"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
// /// call local host express end point /api GET
// export  const get_api = async ()=>{
//     const response = await axios(`http://localhost:5000/api`);        
//     return response.data    
// }
axios_1.default.get('http://localhost:5000/image').then(function (response) {
    console.log(response.data);
    console.log(response.data.status_code);
});
