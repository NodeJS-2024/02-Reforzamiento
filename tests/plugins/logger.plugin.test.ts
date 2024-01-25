import { buildLogger, logger as winstonLogger, logger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {

  test('buildLogger debe de regresar una funcion de logger', () => {

    const logger = buildLogger('test');

    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');

  });

  test('logger.log debe de regresar un mensaje de log', () => {

    // Preparacion
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
    const message = 'test message';
    const service = 'test service';

    // Estimulo
    const logger = buildLogger(service);
    logger.log(message);

    // Aserciones
    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({ // ignora el resto y solo toma los que necesitamos
        level: 'info',
        message,
        service
      })
    );


  });

});