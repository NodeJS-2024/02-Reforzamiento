

const getPokemonById = (id) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  // fetch(url).then( (response) => {

  //   response.json().then( (pokemon) => {
  //     callback(pokemon.name);
  //   });

  // });

  return fetch(url)
    .then( (resp) => resp.json())
    // .then(() => { throw new Error('Pokemon no existe') })
    .then( (pokemon) => pokemon.name);

}


module.exports = getPokemonById;