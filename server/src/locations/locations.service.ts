import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './locations.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,
  ) {}

  async getLocations(location: Location): Promise<Location[]> {
    return await this.locationsRepository.find();
  }

  async getLocation(id: number): Promise<Location[]> {
    return await this.locationsRepository.find({
      where: [{ location_id: id }],
    });
  }

  async getLocationsByUserId(userId: number): Promise<Location[]> {
    return await this.locationsRepository.find({
      where: [{ user_id: userId }],
    });
  }

  async updateLocation(location: Location) {
    this.locationsRepository.save(location);
  }

  async deleteLocation(location: Location) {
    this.locationsRepository.delete(location);
  }
}
