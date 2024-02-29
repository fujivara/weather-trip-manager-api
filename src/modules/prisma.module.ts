import { Module } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { UserRepository } from '../db/repositories/user.repository';
import { TripRepository } from '../db/trip.repository';
import { CityRepository } from '../db/repositories/city.repository';

@Module({
  providers: [PrismaService, UserRepository, TripRepository, CityRepository],
  exports: [PrismaService, UserRepository, TripRepository, CityRepository],
})
export class PrismaModule {}