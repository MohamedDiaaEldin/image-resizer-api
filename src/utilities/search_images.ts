import { stat } from 'fs';
import { get_cash_path } from './build_path';
import { get_main_path } from './build_path';

// checks if the a file found for not 
// return image path if fount 
// return undefined if not

const is_there=  (image_abslout_path: string) => {    
    return new Promise((resolve, reject)=>{
        stat(image_abslout_path, (error, stats)=>{
            if(error){
                reject(undefined)
            }
            resolve(image_abslout_path)
        })
    })
}
export const is_image_there = (image_name:string)=>{    
    const image_path  = get_main_path(image_name)
    return is_there(image_path)
}
export const is_image_cashed = (image_name:string, width:number, height:number )=>{    
    const image_path  = get_cash_path(image_name, width, height)
    return is_there(image_path)
}



// is_image_cashed('encenadaport.jpg').then(result=>{
//     console.log(result)
// }).catch(error => console.log(error))


// is_image_there('encenadaport.jpg').then(result=>{
//     console.log(result)
// }).catch(error => console.log(error))

