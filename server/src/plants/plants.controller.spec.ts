import { Test, TestingModule } from '@nestjs/testing';
import { PlantsController } from './plants.controller';
import { PlantsModule } from './plants.module';
import { Plant } from './plants.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlantsService } from './plants.service';

describe('Plants Controller', () => {
  let controller: PlantsController;
  let service: PlantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PlantsModule],
    })
      .overrideProvider(getRepositoryToken(Plant))
      .useClass(Repository)
      .compile();

    controller = module.get<PlantsController>(PlantsController);
    service = module.get<PlantsService>(PlantsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`get /plants/:id`, async () => {
    const result: Plant = {
      plant_id: 1,
      plant_name: 'plant name',
      description: 'plant description',
      location_id: 1,
      imageurl: 'plant url',
    };
    jest.spyOn(service, 'getPlant').mockResolvedValueOnce([result]);
    expect(await controller.get(1)).toEqual([result]);
  });

  it(`get /locations/account/:id`, async () => {
    const result: Plant = {
      plant_id: 1,
      plant_name: 'plant name',
      description: 'plant description',
      location_id: 1,
      imageurl: 'plant url',
    };
    jest
      .spyOn(service, 'getPlantsByLocationId')
      .mockResolvedValueOnce([result]);
    expect(await controller.getPlants(1)).toEqual([result]);
  });

  it(`get /locations/account/:id - invalid id`, async () => {
    jest.spyOn(service, 'getPlantsByLocationId').mockResolvedValueOnce([]);
    expect(await controller.getPlants(1)).toEqual([]);
  });
});
