import { resize_image } from '../../utilities/sharp_images';

describe('test image  resizing ', ()=>{
  it('test image resizing', ()=>{
    expect(async () => {
      await resize_image('encenadaport', 150, 300)
    }).not.toThrow();
  });
});