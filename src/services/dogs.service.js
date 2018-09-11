const apiURL = 'https://dog.ceo/api/';

const getBreeds = () => {
  const url = `${apiURL}breeds/list/all`;
  const options = {
    method: 'GET',
  };
  return fetch(url, {
    options
  }).then(res => res.json())
    .then(response => {
      if (response.status === 'success') {
        let breeds = Object
          .keys(response.message)
          .map((key) => {
            return { name: key, subbreeds: response.message[key] };
          });
        return breeds;
      } else {
        throw new Error("No Breeds Found");
      }
    }).catch(error => {
      console.error('Error: ', error);
      return Promise.reject(error);
    });
};

const getBreedImage = (name) => {
  const url = `${apiURL}breed/${name}/images/random`;
  const options = {
    method: 'GET',
  };
  return fetch(url, {
    options
  }).then(res => res.json())
    .then(response => {
      if (response.status === 'success') {
        return response.message;
      } else {
        throw new Error("No Image Found");
      }
    }).catch(error => {
      console.error('Error: ', error);
      return Promise.reject(error);
    });
};

export default {
  getBreeds,
  getBreedImage
};