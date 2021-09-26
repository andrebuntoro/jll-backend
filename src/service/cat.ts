import catRepository from "../repository/cat";
import { Breed } from "../param/cat";

const getRandomCat = (): Promise<any> => {
  return catRepository.getRandomCat();
};

const getCatByBreed = (breedId: string): Promise<any> => {
  return catRepository.getCatByBreed(breedId);
};

const getCatBreeds = (): Promise<Array<Breed>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let breeds: Array<Breed> = [];
      const bs = await catRepository.getCatBreeds();
      const data = bs.data;
      for (let i in data) {
        let breed: Breed = {
          id: String(data[i].id),
          name: String(data[i].name),
        };
        breeds.push(breed);
      }
      resolve(breeds);
    } catch (err) {
      reject(err);
    }
  });
};

export default { getRandomCat, getCatByBreed, getCatBreeds };
