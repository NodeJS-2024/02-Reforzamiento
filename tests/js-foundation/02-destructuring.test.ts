import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {

  test('characters debe contener Flash, Superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test('El primer characters debe de ser Flash y el segundo Superman', () => {

    const [ flash, superman ] = characters;

    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');

  });

});



