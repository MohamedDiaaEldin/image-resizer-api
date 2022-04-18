const path = require('path');

const abslout_path = path.resolve();

// build and return cashed image path
export const get_cash_path = (
    image_name: string,
    width: number,
    height: number
): string => {
    image_name = `${image_name}_${width}_${height}.webp`;    
    return path.join(abslout_path, 'images','cashed', image_name);
};

//// build and return main image path
export const get_main_path = (image_name: string): string => {
    return path.join(abslout_path, 'images','main', image_name + '.jpg');
};
