import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { Record } from './records.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [RecordsService],
  controllers: [RecordsController],
})
export class RecordsModule {}
