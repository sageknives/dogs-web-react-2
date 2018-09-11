import React from 'react';
import './image.card.css';

const ImageCard = (props) => {
  return (
    <div className={'imageCard'}>
      <img src={props.src} alt="dog" />
    </div>
  );
};

export default ImageCard;