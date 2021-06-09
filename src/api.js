import request from 'superagent'

export function getPokemonList() {
  return request.get('https://pokeapi.co/api/v2/pokemon?limit=150')
    .set('Accept', 'application/json')
    .then(response => {
      // console.log('api response', response.body.results);
      return response.body.results
})
}