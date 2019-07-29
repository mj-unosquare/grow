import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './locations.entity';
import { FindByIdParams } from 'src/utils/FindByIdParams';

@Controller('locations')
export class LocationsController {
  constructor(private service: LocationsService) {}

  @Get(':id')
  get(@Param() params: FindByIdParams) {
    return this.service.getLocation(params.id);
  }

  @Get('account/:id')
  getLocations(@Param() params: FindByIdParams) {
    return this.service.getLocationsByUserId(params.id);
  }

  @Put()
  update(@Body() location: Location) {
    return this.service.updateLocation(location);
  }

  @Delete(':id')
  deleteLocation(@Param() params) {
    return this.service.deleteLocation(params.id);
  }
}
