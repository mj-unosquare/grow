import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { LocationsModule } from './locations/locations.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AccountsModule,
    LocationsModule,
    PlantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
