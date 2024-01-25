import { getAge } from '../../src/plugins/get-age.plugin';


describe('plugins/get-age.plugin.ts', () => {

  test('getAge debe de regresar la edad de la persona', () => {

    const birthdate = '1994-12-10';
    const age = getAge(birthdate);

    expect(typeof age).toBe('number');

  });

  test('getAge debe de regresar una edad reciente', () => {

    const birthdate = '1994-12-10';
    const age = getAge(birthdate);

    const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculateAge);

  });

  // USO DE SPY = espias
  test('getAge debe de regresar 0 años', () => {

    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthdate = '1995-12-10';
    const age = getAge(birthdate);

    // console.log({ age });

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();

  });

});
