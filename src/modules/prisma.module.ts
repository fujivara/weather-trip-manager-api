import { Module } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { UserRepository } from '../db/repositories/user.repository';
import { TripRepository } from '../db/trip.repository';

@Module({
  providers: [PrismaService, UserRepository, TripRepository],
  exports: [PrismaService, UserRepository, TripRepository],
})
export class PrismaModule {}