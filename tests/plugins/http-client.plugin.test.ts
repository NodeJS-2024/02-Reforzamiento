import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {

  test('httpClientPlugin.get() debe de regresar un string', async() => {

    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

    // console.log(data);
    expect(data).toEqual({ 
      userId: expect.any(Number), 
      id: 1, 
      title: 'delectus aut autem', 
      completed: expect.any(Boolean) 
    });

  });

  test('httpClientPlugin debe tener los metodos de GET, POST, PUT y DELETE', () => {

    expect(typeof httpClientPlugin.get).toBe('function');
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');

  });

});