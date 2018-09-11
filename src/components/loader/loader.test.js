import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './loader';
import renderer from 'react-test-renderer';

describe('Loader', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('expect component to have correct props and details', () => {
    const component = renderer.create(
      <Loader />,
    );

    const block = component.toJSON();
    expect(block.type).toEqual("div");
    expect(block.props.className).toEqual('middle');
    expect(block.children.length).toEqual(1);
    const child = block.children[0];
    expect(child).toEqual('Loading...')
  });
});
