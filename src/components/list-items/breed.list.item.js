import React from 'react';
import { Link } from "react-router-dom";
import './breed.list.item.css';

const BreedListItem = (props) => {
  return (
    <li className={'breedListItem'}>
      <Link to={{ pathname: `/breeds/${props.name}` }}>{props.name}</Link>
    </li>
  );
};

export default BreedListItem;