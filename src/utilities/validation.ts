import express from 'express';

export const is_valid_image_inputs = (req: express.Request): boolean => {
    return req.query.name && req.query.width && req.query.height ? true : false;
    // if (req.query.name &&  req.query.width &&  req.query.height){
    //   return true
    // }
    // return false
};
