import app from '../index';
import supertest from 'supertest';
import axios from 'axios';

// configure supertest with the app
const request = supertest(app);

describe('test index express endpoint', () => {

  it('test end point status code response', (done: DoneFn) => {
    // test status code
    request.get('/image').then((response) => {
      expect(response.status).toBe(200);
    });
    done();
  });

  it('test not valid parms of image end point ', (done: DoneFn) => {
    // test status code
    axios.get('http://localhost:5000/image?name=car?w=10').then(response => {
      expect(response.data.status_code).toBe(400);
      expect(response.data.message).toEqual('bad request');
    });
    done();
  });
  it('test valid parms of image end point ', (done: DoneFn) => {
    // test status code
    axios.get('http://localhost:5000/image?name=car&width=10&height=20').then(response => {
      expect(response.data.status_code).not.toBe(400);
      expect(response.data.message).not.toEqual('bad request');
    });
    done();
  });

  // end of describe
});
