import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TripRepository {
  constructor (private prismaService: PrismaService) {}

  async create (data: Prisma.TripUncheckedCreateInput) {
    return this.prismaService.trip.create({ data });
  }

  async findMany (args: Prisma.TripFindManyArgs) {
    return this.prismaService.trip.findMany(args);
  }
}