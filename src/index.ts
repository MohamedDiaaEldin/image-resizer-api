import express from 'express'
import { sharp_image } from "./utilities/sharp_test";

const app = express()
const port = 5000

// console.log(typeof(sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg')))
// sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg').then(result=>{
//     console.log(result)
// }).catch( error=> console.log(error))


app.get('/image', (req:express.Request, res:express.Response)=>{
    // check if valid request 
    // check if image is found
        // if cashed with the same size 
            //return it from cash folder 
        // else 
            //resize it and save to the folder 
            // return resized images  
    res.send('hello')
})

app.listen(port, ()=>{
    console.log(`Listing on port ${port}`)
})

export default app

