import express from 'express';
import { resize_image } from './utilities/sharp_images';
import { is_image_cashed, is_image_there } from './utilities/search_images';
import { get_cash_path } from './utilities/build_path';
import { is_valid_image_inputs } from './utilities/validation';
const app = express();
const port = 5000;

app.get('/image', (req: express.Request, res: express.Response) => {

  // validate end point params
  if(! is_valid_image_inputs(req)){
    return res.json({
      'status_code':400,
      'message':'bad request'
    });
  }

  const image_name = (req.query.name as unknown) as string;
  const image_width:number = Number(req.query.width );
  const image_height:number = Number(req.query.height);

  is_image_there(image_name).then(main_image_path => {
    is_image_cashed(image_name, image_width, image_height).then(cashed_image_path => {
      /// reutrn cashed image
      console.log('there is a cashed image');
      res.sendFile((cashed_image_path as unknown) as string);

    }).catch(r => { // else
      console.log('not cashed image');
      // resize and save to cash
      resize_image(image_name, image_width, image_height).then(is_done => {
        /// return new cashed image
        res.sendFile(get_cash_path(image_name, image_width, image_height));

      }).catch(err => {
        res.json({
          status_code: 500,
          message: 'server error'
        });
      });

    });

  }).catch(error => {
    res.json({
      status_code: 404,
      message: 'image not found'
    });
  });
});

app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});

export default app;
