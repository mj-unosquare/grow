import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { TrackersService } from './trackers.service';
import { Tracker } from './trackers.entity';

@Controller('trackers')
export class TrackersController {
  constructor(private service: TrackersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getTracker(params.id);
  }

  @Get('/')
  getTrackers() {
    return this.service.getTrackers();
  }
}
