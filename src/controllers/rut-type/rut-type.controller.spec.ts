import { Test, TestingModule } from '@nestjs/testing';
import { RutTypeController } from './rut-type.controller';

describe('RutType Controller', () => {
  let controller: RutTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RutTypeController],
    }).compile();

    controller = module.get<RutTypeController>(RutTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
