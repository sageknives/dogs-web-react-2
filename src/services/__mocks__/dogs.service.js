
const getBreeds = async () => {
  return Promise.resolve([
    { name: "beagle", subbreeds: [] },
    { name: "mutt", subbreeds: ["supermix"] },
    { name: "greyhound", subbreeds: [] }
  ]);
}

const getBreedImage = (name) => {
  return new Promise(resolve => {
    resolve("url.com/string");
  })
}
export default {
  getBreeds,
  getBreedImage
}

