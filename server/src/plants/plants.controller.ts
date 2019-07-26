import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { PlantsService } from './plants.service';
import { Plant } from './plants.entity';

@Controller('plants')
export class PlantsController {
  constructor(private service: PlantsService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getPlant(params.id);
  }

  @Get('location/:id')
  getPlants(@Param() params) {
    return this.service.getPlantsByLocationId(params.id);
  }

  @Put()
  update(@Body() plant: Plant) {
    return this.service.updatePlant(plant);
  }

  @Delete(':id')
  deletePlant(@Param() params) {
    return this.service.deletePlant(params.id);
  }
}
