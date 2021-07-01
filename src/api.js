import request from "superagent";

export function getPokemonList() {
  return request
    .get("https://pokeapi.co/api/v2/pokemon?limit=150")
    .set("Accept", "application/json")
    .then((response) => {
      return response.body.results;
    });
}

export function getDetails(number) {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .set("Accept", "application/json")
    .then((response) => {
      return response.body.types;
    });
}

export function getProfile (number) {
  return request
  .get(`https://pokeapi.co/api/v2/pokemon-form/${number}/`)
  .set("Accept", "application/json")
  .then((response) => {
    return response.body.sprites.front_default;
  });
}