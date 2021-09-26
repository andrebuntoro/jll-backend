import axios from "axios";

const getRandomCat = (): Promise<any> => {
  return axios.get("https://api.thecatapi.com/v1/images/search");
};

const getCatByBreed = (breedId: string): Promise<any> => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=6`
  );
};

const getCatBreeds = (): Promise<any> => {
  return axios.get("https://api.thecatapi.com/v1/breeds");
};

export default { getRandomCat, getCatByBreed, getCatBreeds };
