import { Test, TestingModule } from '@nestjs/testing';
import { PlantsController } from './plants.controller';
import { PlantsModule } from './plants.module';
import { Plant } from './plants.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('Plants Controller', () => {
  let controller: PlantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PlantsModule],
    })
      .overrideProvider(getRepositoryToken(Plant))
      .useClass(Repository)
      .compile();

    controller = module.get<PlantsController>(PlantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
