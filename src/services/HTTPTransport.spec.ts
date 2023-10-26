import {HTTPTransport} from "./HTTPTransport";
import {beforeEach} from "mocha";

describe('HTTPTransport', () => {
  let fixture;

  beforeEach(() => {
    fixture = new HTTPTransport();
  })

  it('GET', (done) => {
    fixture.get('https://jsonplaceholder.typicode.com/posts')
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      })
  })

  it('POST', (done) => {
    fixture.post('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'content-type': 'application/json'
      },
      data: null
    })
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      })
  })

  it('PUT', (done) => {
    fixture.put('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'content-type': 'application/json'
      },
      data: null
    })
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      })
  })

  it('DELETE', (done) => {
    fixture.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      })
  })
})
