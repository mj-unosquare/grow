import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from './records.entity';

@Controller('records')
export class RecordsController {
  constructor(private service: RecordsService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getRecord(params.id);
  }

  @Get('/:plant/:tracker/:date')
  getRecordByDate(@Param() params) {
    return this.service.getRecordByDate(
      params.plant,
      params.tracker,
      params.date,
    );
  }

  @Post()
  create(@Body() record: Record) {
    return this.service.createRecord(record);
  }

  @Put()
  update(@Body() record: Record) {
    return this.service.updateRecord(record);
  }
}
