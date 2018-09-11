import React from 'react';
import renderer from 'react-test-renderer';
import Breedlist from './breed.list';
import { BrowserRouter as Router } from "react-router-dom";

jest.mock('../../services/dogs.service');

describe('Breed List', () => {

  it('renders without crashing', () => {

    const component = renderer.create(
      <Router>
        <Breedlist />
      </Router>,
    );
  });

  it('expect component to have correct props and details', done => {

    const component = renderer.create(
      <Router>
        <Breedlist />
      </Router>,
    );

    setTimeout(() => {
      const block = component.toJSON();
      expect(block.length).toEqual(2);
      const list = block[1];
      expect(list.type).toEqual('ul');
      expect(list.children.length).toEqual(4);
      done();
    });
  });
});
