import { Test, TestingModule } from '@nestjs/testing';
import { TrackersController } from './trackers.controller';

describe('Trackers Controller', () => {
  let controller: TrackersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackersController],
    }).compile();

    controller = module.get<TrackersController>(TrackersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
