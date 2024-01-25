import { getUserById } from '../../src/js-foundation/03-callbacks';


describe('js-foundation 03-callbacks.ts', () => {

  test('getUserById debe regresar un error si no existe el usuario', (done) => {

    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`El usuario no se encontro con el id: ${ id }`);
      expect(user).toBeUndefined();

      done(); // Cuando ya han terminado y obtenido los resultados
    });
    
  });

  test('getUserById debe de regresar el id y name del usuario', (done) => {

    const id = 1;

    getUserById(id, (err, user) => {

      expect(err).toBeUndefined();
    
      expect(user).toEqual({ id: 1, name: 'John Doe' });
      expect(user!.id).toBe(1);
      expect(user!.name).toBe('John Doe');

      done();
    });

  });

});
