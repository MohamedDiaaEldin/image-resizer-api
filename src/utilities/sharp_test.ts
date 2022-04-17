

const sharp = require('sharp');


export const sharp_image = (image_path: string, width: number, height: number, dis_path: string) => {
    const pro = new Promise((resolve, reject) => {
        sharp(image_path)
        .rotate()
        .resize(width, height).toFile(dis_path, (error: object, info: object) => {
            if( error){
                reject(false)
            }
            else{
                resolve(true)
            }


        })
    })
    return pro
}


