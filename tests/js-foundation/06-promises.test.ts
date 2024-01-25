import { getPokemonById } from '../../src/js-foundation/06-promises';


describe('js-foundation 06-promises.ts', () => {

  test('getPokemonById debe de regresar un pokemon', async() => {

    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    
    expect(pokemonName).toBe('bulbasaur');

  });

  test('debe de regresar un error si el pokemon no existe', async() => {

    const pokemonId = 110000001;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();

    } catch (error) {
      expect(error).toBe(`El pokemon no se encuentra con el id: ${ pokemonId }`);
    }

    // expect(pokemonName).toBe('Pokemon no existe');

  });

});
