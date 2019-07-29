import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from './locations.service';
import { LocationsModule } from './locations.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './locations.entity';

describe('LocationsService', () => {
  let service: LocationsService;
  let repo: Repository<Location>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LocationsModule],
    })
      .overrideProvider(getRepositoryToken(Location))
      .useClass(Repository)
      .compile();

    service = module.get<LocationsService>(LocationsService);
    repo = module.get<Repository<Location>>(getRepositoryToken(Location));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`getAccounts`, async () => {
    const result: Location = {
      location_id: 1,
      location_name: 'plant name',
      description: 'plant description',
      imageurl: 'location url',
      user_id: 1,
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([result]);
    expect(await service.getLocationsByUserId(1)).toEqual([result]);
  });

  it(`getAccount`, async () => {
    const result: Location = {
      location_id: 1,
      location_name: 'plant name',
      description: 'plant description',
      imageurl: 'location url',
      user_id: 1,
    };
    jest.spyOn(repo, 'find').mockResolvedValueOnce([result]);
    expect(await service.getLocation(1)).toEqual([result]);
  });

  it(`getAccount`, async () => {
    jest.spyOn(repo, 'find').mockResolvedValueOnce([]);
    expect(await service.getLocation(1)).toEqual([]);
  });
});
