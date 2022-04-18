import {get_cash_path, get_main_path } from '../../utilities/build_path';

describe('test build path function', ()=>{
  const path = require('path');
  const abslout_path = path.resolve();
  const image_name = 'image_name';
  const width = 10;
  const hegiht = 20;
  const expected_cashed_path =`${abslout_path}/images/cashed/${image_name}_${width}_${hegiht}.webp`;
  const expected_main_path = `${abslout_path}/images/main/${image_name}.jpg`;

  it('test build cash path', ()=>{
    expect(get_cash_path(image_name, width, hegiht)).toEqual(expected_cashed_path);
  });
  it('test build cash path', ()=>{
    expect(get_main_path(image_name)).toEqual(expected_main_path);
  });

});