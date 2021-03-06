import axios from "axios";

const getRandomCat = (): Promise<any> => {
  return axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.data);
};

const getCatByBreed = (breedId: string): Promise<any> => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=6`
    )
    .then((res) => res.data);
};

const getCatBreeds = (): Promise<any> => {
  return axios
    .get("https://api.thecatapi.com/v1/breeds")
    .then((res) => res.data);
};

export default { getRandomCat, getCatByBreed, getCatBreeds };
