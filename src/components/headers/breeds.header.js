import React, { Component } from "react";
import './breeds.header.css';
import { withRouter } from 'react-router-dom';

const BackButton = (props) => {
  if (props.showBackButton) {
    return (
      <button className={'backButton'} onClick={props.click}></button>
    );
  } else {
    return null;
  }
};

class BreedsHeader extends Component {
  state = {
    showBackButton: false,
    title: "Breeds"
  };
  constructor() {
    super();
    this.back = this.back.bind(this);
  }

  back() {
    this.props.history.goBack();
  }


  componentDidMount() {
    this.setState({ showBackButton: this.props.showBackButton, title: this.props.title })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <header>
        <BackButton showBackButton={this.state.showBackButton} click={this.back} ></BackButton>
        <h2 className={'title'}>{this.state.title}</h2>
      </header>
    );
  }
}

export default withRouter(BreedsHeader);
