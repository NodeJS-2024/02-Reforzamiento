// A => arrange, A => act, A => assert

describe('Test in the App File', () => {

  test('should be 30', () => { 

    // 1. Arrage (Preparacion)
    const num1 = 10;
    const num2 = 20;

    // 2. Act (Actuar)
    const result = num1 + num2;

    // 3. Assert (Confirmar)
    expect(result).toBe(30);

  });
  
});