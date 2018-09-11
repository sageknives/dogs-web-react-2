import React from 'react';
import ReactDOM from 'react-dom';
import BreedsHeader from './breeds.header';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><BreedsHeader /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('expect list component to have correct props and details', async () => {
  const title = "Breeds";
  const showBackButton = false;
  const component = renderer.create(
    <Router>
      <BreedsHeader title={title} showBackButton={showBackButton} />
    </Router>,
  );

  const parent = component.toJSON();
  expect(parent.type).toEqual("header");
  expect(parent.children.length).toEqual(1);
  const child = parent.children[0];

  expect(child.type).toEqual('h2');
  expect(child.props.className).toEqual('title');
  expect(child.children.length).toEqual(1);
  const subChild = child.children[0];
  expect(subChild).toEqual(title);
});

it('expect details component to have correct props and details', () => {
  const title = "Breed";
  const showBackButton = true;
  const component = renderer.create(
    <Router>
      <BreedsHeader title={title} showBackButton={showBackButton} />
    </Router>,
  );

  const parent = component.toJSON();
  expect(parent.type).toEqual("header");
  expect(parent.children.length).toEqual(2);
  const child1 = parent.children[0];
  const child2 = parent.children[1];

  expect(child1.type).toEqual('button');
  expect(child1.props.className).toEqual('backButton');

  expect(child2.type).toEqual('h2');
  expect(child2.children.length).toEqual(1);
  const subChild = child2.children[0];
  expect(subChild).toEqual(title);
});
