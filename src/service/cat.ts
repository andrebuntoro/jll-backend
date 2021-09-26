import catRepository from "../repository/cat";
import { Breed, Cat } from "../param/cat";

const getRandomCat = (): Promise<Array<Cat>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let cats: Array<Cat> = [];
      const data = await catRepository.getRandomCat();
      for (let i in data) {
        let cat: Cat = {
          url: String(data[i].url),
        };
        cats.push(cat);
      }
      resolve(cats);
    } catch (err) {
      reject(err);
    }
  });
};

const getCatByBreed = (breedId: string): Promise<Array<Cat>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let cats: Array<Cat> = [];
      const data = await catRepository.getCatByBreed(breedId);
      for (let i in data) {
        let cat: Cat = {
          url: String(data[i].url),
        };
        cats.push(cat);
      }
      resolve(cats);
    } catch (err) {
      reject(err);
    }
  });
};

const getCatBreeds = (): Promise<Array<Breed>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let breeds: Array<Breed> = [];
      const data = await catRepository.getCatBreeds();
      for (let i in data) {
        let breed: Breed = {
          id: String(data[i].id),
          label: String(data[i].name),
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
