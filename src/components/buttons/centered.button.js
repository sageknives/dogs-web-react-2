import React from 'react';
import './centered.button.css';

const CenteredButton = (props) => {
  return (
    <button className={'centeredButton'} onClick={props.click}>
      {props.text}
    </button>
  );
};

export default CenteredButton;