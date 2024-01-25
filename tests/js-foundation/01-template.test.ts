import { emailTemplate } from '../../src/js-foundation/01-template';


describe('js-foundation/01-template.ts', () => {

  test('emailTemplate debe de tener un saludo', () => {
    expect(emailTemplate).toContain('Hola, ');
  });

  test('emailTemplate debe de contener {{name}} y {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);

    expect(emailTemplate).toContain('{{name}}');
    expect(emailTemplate).toContain('{{orderId}}');
  });

});
