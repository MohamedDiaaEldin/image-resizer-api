import express from 'express'
import { sharp_image } from "./utilities/sharp_test";
import { is_image_cashed, is_image_there } from './utilities/search_images';

const app = express()
const port = 5000

// console.log(typeof(sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg')))
// sharp_image('./images/encenadaport.jpg', 50, 50, 'test.jpg').then(result=>{
//     console.log(result)
// }).catch( error=> console.log(error))


app.get('/image', (req: express.Request, res: express.Response) => {
    // check if valid request 
    // check if image is found
     // if cashed with the same size 
          //return it from cash folder 
      // else 
          //resize it and save to the cashed folder 
          // return resized images  
    is_image_there((req.query.name as unknown) as string + ".jpg").then(result => {
        const cashed_path = (req.query.name as unknown) as string + ".jpg"
        res.send("found")
    }).catch(error => {
        res.json({
            status_code: 404,
            message: "image not found"
        })
    })
    // res.send('hello')
})

app.listen(port, () => {
    console.log(`Listing on port ${port}`)
})

export default app

