import React from 'react';
import ReactDOM from 'react-dom';
import ImageCard from './image.card';
import renderer from 'react-test-renderer';

describe('Image Card', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('expect list component to have correct props and details', async () => {
    const src = "http://dogsrus.com/images/cowboys";
    const alt = "dog";
    const component = renderer.create(
      <ImageCard src={src} />,
    );

    const parent = component.toJSON();
    expect(parent.type).toEqual("div");
    expect(parent.props.className).toEqual('imageCard');
    expect(parent.children.length).toEqual(1);
    const child = parent.children[0];
    expect(child.type).toEqual("img");
    expect(child.props.src).toEqual(src);
    expect(child.props.alt).toEqual(alt);
  });
});