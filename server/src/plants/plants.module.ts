import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { Plant } from './plants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  providers: [PlantsService],
  controllers: [PlantsController],
})
export class PlantsModule {}
