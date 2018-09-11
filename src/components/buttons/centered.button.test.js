import React from 'react';
import ReactDOM from 'react-dom';
import CenteredButton from './centered.button';
import renderer from 'react-test-renderer';

describe('Centered Button', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CenteredButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('expect  component to have correct props and details', async () => {
    const text = 'Button name';
    const click = () => console.log();
    const component = renderer.create(
      <CenteredButton text={text} click={click} />,
    );

    const parent = component.toJSON();
    expect(parent.type).toEqual("button");
    expect(parent.props.className).toEqual('centeredButton');
    expect(parent.children.length).toEqual(1);
    const child = parent.children[0];
    expect(child).toEqual(text);
    expect(parent.props.onClick).toEqual(click);
  });

});

