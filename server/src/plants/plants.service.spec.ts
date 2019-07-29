import { Test, TestingModule } from '@nestjs/testing';
import { PlantsService } from './plants.service';
import { PlantsModule } from './plants.module';
import { Plant } from './plants.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('PlantsService', () => {
  let service: PlantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PlantsModule],
    })
      .overrideProvider(getRepositoryToken(Plant))
      .useClass(Repository)
      .compile();

    service = module.get<PlantsService>(PlantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
