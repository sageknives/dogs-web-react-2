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

  //gets and sets breed name and requests an image on load
  componentDidMount() {
    let name = this.props.match.params.id;
    this.setState({ breedName: name })
    this.getBreedImage(name);
  }

  //cancels any request in progress on exit
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  //gets a different breed image
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

  //Shows loader until image url has been downloaded
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