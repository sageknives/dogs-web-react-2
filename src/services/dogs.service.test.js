import React from 'react';
import dogService from './dogs.service';

//jest.mock('../../services/fetch');

describe('Dog Service', () => {

  it('should return aa list of breeds', done => {
    const status = 'success';
    const breeds = {
      beagle: [],
      mutt: ["supermix"],
      greyhound: []
    };
    const response = {
      json: () => { return { status: status, message: breeds } }
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    setTimeout(() => {
      dogService.getBreeds()
        .then((results) => {
          expect(results.length).toEqual(3)
          const breed1 = results[0];
          expect(breed1.name).toEqual('beagle');
          expect(breed1.subbreeds.length).toEqual(breeds.beagle.length);
          const breed2 = results[1];
          expect(breed2.name).toEqual('mutt');
          expect(breed2.subbreeds.length).toEqual(breeds.mutt.length);
          expect(breed2.subbreeds[0]).toEqual(breeds.mutt[0]);
          const breed3 = results[2];
          expect(breed3.name).toEqual('greyhound');
          expect(breed3.subbreeds.length).toEqual(breeds.greyhound.length);
          done();
        }).catch(error => {
          expect(error).toEqual(null);
          done();
        })
    })
  });

  it('should return aa list of breeds', done => {
    const status = 'fail';
    const response = {
      json: () => { return { status: status, message: undefined } }
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    setTimeout(() => {
      dogService.getBreeds()
        .then((results) => {
          expect(results).toEqual(undefined)
          done();
        }).catch(error => {
          expect(error.message).toEqual("No Breeds Found");
          done();
        })
    })
  });

  it('to return an image url', done => {
    const status = 'success';
    const imageURL = 'image.png';
    const response = {
      json: () => { return { status: status, message: imageURL } }
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    setTimeout(() => {
      dogService.getBreedImage('dog')
        .then((url) => {
          expect(url).toEqual(imageURL)
          done();
        }).catch(error => {
          expect(error).toEqual(null);
          done();
        })
    })
  });

  it('fail if no image url', done => {
    const status = 'fail';
    const imageURL = 'image.png';
    const response = {
      json: () => { return { status: status, message: imageURL } }
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    setTimeout(() => {
      dogService.getBreedImage('dog')
        .then((url) => {
          expect(url).toEqual(null)
          done();
        }).catch(error => {
          expect(error.message).toEqual("No Image Found");
          done();
        })
    });
  });

})
