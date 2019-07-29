import { Test, TestingModule } from '@nestjs/testing';
import { PlantsService } from './plants.service';
import { PlantsModule } from './plants.module';
import { Plant } from './plants.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('PlantsService', () => {
  let service: PlantsService;
  let repo: Repository<Plant>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PlantsModule],
    })
      .overrideProvider(getRepositoryToken(Plant))
      .useClass(Repository)
      .compile();

    service = module.get<PlantsService>(PlantsService);
    repo = module.get<Repository<Plant>>(getRepositoryToken(Plant));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`getAccounts`, async () => {
    const result: Plant = {
      plant_id: 1,
      plant_name: 'plant name',
      description: 'plant description',
      location_id: 1,
      imageurl: 'plant url',
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([result]);
    expect(await service.getPlantsByLocationId(1)).toEqual([result]);
  });

  it(`getAccount`, async () => {
    const result: Plant = {
      plant_id: 1,
      plant_name: 'plant name',
      description: 'plant description',
      location_id: 1,
      imageurl: 'plant url',
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([result]);
    expect(await service.getPlant(1)).toEqual([result]);
  });

  it(`getAccount`, async () => {
    jest.spyOn(repo, 'find').mockResolvedValueOnce([]);
    expect(await service.getPlant(1)).toEqual([]);
  });
});
