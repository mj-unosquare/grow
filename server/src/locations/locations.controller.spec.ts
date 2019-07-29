import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsModule } from './locations.module';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Location } from './locations.entity';
import { LocationsService } from './locations.service';

describe('Locations Controller', () => {
  let controller: LocationsController;
  let service: LocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LocationsModule],
    })
      .overrideProvider(getRepositoryToken(Location))
      .useClass(Repository)
      .compile();

    controller = module.get<LocationsController>(LocationsController);
    service = module.get<LocationsService>(LocationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`get /locations/:id`, async () => {
    const result: Location = {
      location_id: 1,
      location_name: 'plant name',
      description: 'plant description',
      imageurl: 'location url',
      user_id: 1,
    };
    jest.spyOn(service, 'getLocation').mockResolvedValueOnce([result]);
    expect(await controller.get(1)).toEqual([result]);
  });

  it(`get /locations/account/:id`, async () => {
    const result: Location = {
      location_id: 1,
      location_name: 'plant name',
      description: 'plant description',
      imageurl: 'location url',
      user_id: 1,
    };
    jest.spyOn(service, 'getLocationsByUserId').mockResolvedValueOnce([result]);
    expect(await controller.getLocations(1)).toEqual([result]);
  });

  it(`get /locations/account/:id - invalid id`, async () => {
    jest.spyOn(service, 'getLocationsByUserId').mockResolvedValueOnce([]);
    expect(await controller.getLocations(1)).toEqual([]);
  });
});
