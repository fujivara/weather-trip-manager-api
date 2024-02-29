import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CityRepository {
  constructor (private prismaService: PrismaService) {}

  async findMany (args: Prisma.CityFindManyArgs) {
    return this.prismaService.city.findMany(args);
  }
}