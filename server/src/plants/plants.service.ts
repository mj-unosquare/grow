import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from './plants.entity';
@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant) private plantsRepository: Repository<Plant>,
  ) {}

  async getPlants(plant: Plant): Promise<Plant[]> {
    return await this.plantsRepository.find();
  }

  async getPlant(id: number): Promise<Plant[]> {
    return await this.plantsRepository.find({
      where: [{ plant_id: id }],
    });
  }

  async getPlantsByLocationId(locationId: number): Promise<Plant[]> {
    return await this.plantsRepository.find({
      where: [{ location_id: locationId }],
    });
  }

  async updatePlant(plant: Plant) {
    this.plantsRepository.save(plant);
  }

  async deletePlant(plant: Plant) {
    this.plantsRepository.delete(plant);
  }
}
