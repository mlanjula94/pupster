import axios from "axios";

export default {

  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },

  getDogsOfBreed: function(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  },

  getDogBreeds: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }

}