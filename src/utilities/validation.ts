import express from 'express'

export const is_valid_image_inputs = (req:express.Request)=>{
    return  req.query.name &&  req.query.width &&   req.query.height
}