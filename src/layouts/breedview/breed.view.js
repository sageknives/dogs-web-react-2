import React, { Component } from "react";
import dogService from '../../services/dogs.service';
import BreedsHeader from '../../components/headers/breeds.header';
import ImageCard from '../../components/cards/image.card';
import CenteredButton from '../../components/buttons/centered.button';
import Loader from '../../components/loader/loader';

class Breedview extends Component {
  state = {
    breedName: null,
    breedImageUrl: null,
  };

  componentDidMount() {
    let name = this.props.match.params.id;
    this.setState({ breedName: name })
    this.getBreedImage(name);
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  getBreedImage(name) {
    this._asyncRequest = dogService.getBreedImage(name)
      .then(
        imageURL => {
          this._asyncRequest = null;
          this.setState({ breedImageUrl: imageURL });
        }
      ).catch(error => {
        alert(error);
      })
  }

  render() {
    if (this.state.breedImageUrl === null) {
      return <Loader />
    }
    else {
      return <React.Fragment>
        <BreedsHeader showBackButton={true} title={this.state.breedName}></BreedsHeader>
        <ImageCard src={this.state.breedImageUrl} />
        <CenteredButton text="Change Picture" click={() => this.getBreedImage(this.state.breedName)} />
      </React.Fragment>
    }
  }
}

export default Breedview;