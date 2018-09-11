import React from 'react';
import renderer from 'react-test-renderer';
import Breedview from './breed.view';
import { BrowserRouter as Router } from "react-router-dom";

jest.mock('../../services/dogs.service');

describe('Breed View', () => {

  it('renders without crashing', () => {
    const props = {
      match: {
        params: {
          id: 'beagle'
        }
      }
    }
    const component = renderer.create(
      <Router>
        <Breedview {...props} />
      </Router>,
    );
  });

  it('expect component to have correct props and details', done => {
    // let renderer = ShallowRenderer.createRenderer();
    const props = {
      match: {
        params: {
          id: 'beagle'
        }
      }
    }
    const component = renderer.create(
      <Router>
        <Breedview {...props} />
      </Router>,
    );

    setTimeout(() => {
      const block = component.toJSON();
      expect(block.length).toEqual(3);
      const card = block[1];
      expect(card.type).toEqual('div');
      expect(card.props.className).toEqual('imageCard');
      expect(card.children.length).toEqual(1);
      const image = card.children[0];
      expect(image.type).toEqual('img');
      expect(image.props.src).toEqual('url.com/string');
      expect(image.props.alt).toEqual('dog');

      done();
    });
  });
});
