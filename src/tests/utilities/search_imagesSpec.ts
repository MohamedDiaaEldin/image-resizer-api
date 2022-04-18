
import {is_image_there} from '../../utilities/search_images'



describe('test search image function ', ()=>{
    const image_name = "fjord"
    it('test with valid image name', (done:DoneFn)=>{
        is_image_there(image_name).then(result=>{
            expect(result).toBeTruthy()
        }).catch(result=>{
            expect(result).toBeFalse()
        }) 
        done()
    })    
    it('test with not valid valid image name', (done:DoneFn)=>{
        is_image_there(image_name).then(result=>{
           // 
        }).catch(result=>{
            expect(result).toBeFalse()
        }) 
        done()
    })    


})