import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { TripController } from '../api/controllers/trip.controller';
import { TripService } from '../api/services/trip.service';


@Module({
  imports: [PrismaModule],
  controllers: [TripController],
  providers: [TripService],
})
export class TripModule {}