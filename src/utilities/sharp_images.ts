import { get_cash_path, get_main_path } from './build_path';
const sharp = require('sharp');

export const resize_image = (image_name: string, width: number, height: number):Promise<boolean>=> {
  const image_path = get_main_path(image_name);
  const image_cashed_path = get_cash_path(image_name, width, height);
  return new Promise((resolve, reject) => {

    sharp(image_path)
      .resize(width, height).toFile(image_cashed_path, (error: object, info: object) => {
        if (error) {
          console.log(error);
          console.log('error while resizing');
          reject(false);
        }
        resolve(true);
      });
  });
};
