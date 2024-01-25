
// const { http } = require('../plugins');

import { httpClient } from '../plugins';

export const getPokemonById = async( id: string | number ): Promise<string> => {

  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  // fetch(url).then( (response) => {

  //   response.json().then( (pokemon) => {
  //     callback(pokemon.name);
  //   });

  // });

  // return fetch(url)
  //   .then( (resp) => resp.json())
  //   // .then(() => { throw new Error('Pokemon no existe') })
  //   .then( (pokemon) => pokemon.name);

  // Async - Await
  // const response = await fetch(url);
  // const pokemon = await response.json();

  try {

    const pokemon = await httpClient.get(url);

    return pokemon.name;
  } catch(error) {
    throw `El pokemon no se encuentra con el id: ${ id }`;
  }

}


// module.exports = getPokemonById;