import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BreedListItem from './breed.list.item';
import { BrowserRouter as Router } from "react-router-dom";

describe('Breed List Item', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><BreedListItem /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('expect component to have correct props and details', () => {
    const testName = "fuzzy";
    const component = renderer.create(
      <Router>
        <BreedListItem name={testName} />
      </Router>,
    );
    const element = component.toJSON();
    expect(element.type).toEqual("li");
    expect(element.props.className).toEqual("breedListItem");
    expect(element.children.length).toEqual(1);
    const subElement = element.children[0];
    expect(subElement.type).toEqual("a");
    expect(subElement.children.length).toEqual(1);
    const subSubElement = subElement.children[0];
    expect(subSubElement).toEqual(testName);
    expect(subElement.props.href).toEqual(`/breeds/${testName}`);
  });
});
