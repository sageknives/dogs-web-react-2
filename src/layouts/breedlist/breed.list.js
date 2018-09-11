import React, { Component } from "react";
import dogService from '../../services/dogs.service';
import Loader from '../../components/loader/loader';
import BreedsHeader from '../../components/headers/breeds.header';
import BreedListItem from "../../components/list-items/breed.list.item";
import './breed.list.css';
import CenteredButton from "../../components/buttons/centered.button";

class Breedlist extends Component {
  state = {
    breeds: null,
    loading: true
  };

  // requests new breed list on load
  componentDidMount() {
    this.refreshBreedList();
  }

  //gets and sets breeds from service
  refreshBreedList() {
    this._asyncRequest = dogService.getBreeds()
      .then(
        breeds => {
          this._asyncRequest = null;
          this.setState({ breeds: breeds, loading: false });
        }
      ).catch(error => {
        this.setState({ breeds: null, loading: false });
        this._asyncRequest = null;
        alert(error);
      })
  }

  // cancels any on exit
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  // shows loader until breeds have been set, shows error refresh button on error
  render() {
    if (this.state.breeds === null && this.state.loading === true) {
      return <Loader />
    }
    else if (this.state.breeds === null && this.state.loading === false) {
      return <CenteredButton text="Retry" click={() => this.refreshBreedList()} />
    }
    else {
      //creates a list of breed items from breeds prop
      const listItems = [];
      this.state.breeds.forEach((breed, index) => {
        listItems.push(<BreedListItem name={breed.name} key={breed.name + index} />);
        if (breed.subbreeds.length) {
          breed.subbreeds.forEach(sub => {
            listItems.push(<BreedListItem name={breed.name + '-' + sub} key={breed.name + sub + index} />);
          })
        }
      });
      return <React.Fragment>
        <BreedsHeader showBackButton={false} title="Breeds"></BreedsHeader>
        <ul className={'breedList'}>{listItems}</ul>
      </React.Fragment>
    }
  }
}

export default Breedlist;
