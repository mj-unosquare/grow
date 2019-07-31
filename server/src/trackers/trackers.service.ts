import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracker } from './trackers.entity';

@Injectable()
export class TrackersService {
  constructor(
    @InjectRepository(Tracker) private trackersRepository: Repository<Tracker>,
  ) {}

  async getTrackers(): Promise<Tracker[]> {
    return await this.trackersRepository.find();
  }

  async getTracker(id: number): Promise<Tracker[]> {
    return await this.trackersRepository.find({
      where: [{ tracker_id: id }],
    });
  }
}
