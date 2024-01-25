import { builMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation 05-factory.ts', () => {

  const getUUID = () => '1324';
  const getAge = () => 28;

  test('builMakePerson debe regresar una funcion', () => {
    const makePerson = builMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
  });

  test('makePerson debe de regresar una persona', () => {

    const makePerson = builMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1994-10-12' });

    // console.log(johnDoe);

    expect(johnDoe).toEqual({ 
      id: '1324', 
      name: 'John Doe', 
      birthdate: '1994-10-12', 
      age: 28 
    });

  });

});
